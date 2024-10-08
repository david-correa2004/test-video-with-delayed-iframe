const videos_info = {
    video1: { id: "1017268067" },
    video2: { id: "1017268116" },
    video3: { id: "1017268324" },
    video4: { id: "1017268410" },
    video5: { id: "1017268463" },
    video6: { id: "1017268514" },
    video7: { id: "1017268563" },
    video8: { id: "1017268596" },
    video9: { id: "1017268645" },
};

const videoContainers = document.querySelectorAll(".vimeo-container");

videoContainers.forEach(container => {
    container.onclick = () => {
        var script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        document.body.appendChild(script);

        let selectedVideo = container.dataset.video;

        const videoId = videos_info[selectedVideo].id;

        script.onload = () => {
            var options = {
                id: videoId,
                width: 640,
                loop: false,
                autoplay: true,
                muted: false,
            };

            container.innerHTML = '';

            var player = new Vimeo.Player(container, options);
            player.setVolume(1);
        };
    };
});
