// helpers/streamHelpers.js
const ffmpeg = require('fluent-ffmpeg');

const createTranscodedRoute = (streamUrl) => (req, res) => {
    res.setHeader('Content-Type', 'audio/mpeg');
    const command = ffmpeg(streamUrl)
        .audioCodec('libmp3lame')
        .format('mp3')
        .on('error', (err) => {
            console.error('Erro durante a transcodificação:', err);
            if (!res.headersSent) {
                res.status(500).send('Erro ao processar o áudio.');
            }
        });

    command.pipe(res, { end: true });
};

const createM3URoute = (streamUrl, name) => (req, res) => {
    const cleanName = name.replace(/ /g, '_').toLowerCase();
    res.setHeader('Content-Type', 'audio/x-mpegurl');
    res.setHeader('Content-Disposition', `attachment; filename="${cleanName}.m3u"`);

    const playlist = `#EXTM3U
#EXTINF:-1,${name}
${streamUrl}
`;
    res.send(playlist.trim());
};

module.exports = { createTranscodedRoute, createM3URoute };
