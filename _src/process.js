const sharp = require('sharp');
const path = require('path');

// [source, outputBaseName, targetWidth, cropBottomFrac]
// The home-* slider banners carry a baked-in marketing text strip across the
// bottom (~bottom 20%); we trim it so only the clean machine photo remains.
const jobs = [
  ['home-09.png', 'hero-mineria',               1600, 0.20], // hero background (capped to source 1000w)
  ['home-04.png', 'komatsu-930e-camion-minero',  900, 0.20], // hero visual
  ['home-08.png', 'komatsu-wa1200-cargador',     900, 0.20], // feature card constr+mineria
  ['home-01.png', 'excavadora-komatsu-pc4000',   900, 0.20], // equip: excavadora
  ['home-03.png', 'grua-demag-ac100',            900, 0.20], // equip: grua
  ['home-06.png', 'telehandler-dieci-hercules',  900, 0.20], // equip: montacargas
  ['sol-7.jpg',   'operacion-obra-komatsu-d155',  600, 0],    // about: site operation
  ['qs-4.jpg',    'taller-servicio-mega',         600, 0],    // about: workshop
  ['qs-1.jpg',    'equipo-tecnico-mega',          600, 0],    // about: team crew
];

(async () => {
  for (const [src, base, w, cropBottomFrac] of jobs) {
    const input = path.join('_src', src);
    // All sources are photographic -> JPEG is the right "original" raster format.
    const ext = 'jpg';
    let pipe = sharp(input);
    if (cropBottomFrac > 0) {
      const m = await sharp(input).metadata();
      const keepH = Math.round(m.height * (1 - cropBottomFrac));
      pipe = pipe.extract({ left: 0, top: 0, width: m.width, height: keepH });
    }
    const resized = pipe.resize({ width: w, withoutEnlargement: true });

    // Original-format file (jpg), quality ~80
    const outMain = path.join('assets', 'img', base + '.' + ext);
    await resized.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(outMain);

    // WebP sibling, quality ~78
    const outWebp = path.join('assets', 'img', base + '.webp');
    await resized.clone().webp({ quality: 78 }).toFile(outWebp);

    const m2 = await sharp(outMain).metadata();
    console.log(`${base}: ${m2.width}x${m2.height} (${ext} + webp)`);
  }
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
