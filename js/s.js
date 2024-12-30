document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    // 添加错误处理
    bgMusic.addEventListener('error', function(e) {
        console.log('音频加载错误：', e);
        alert('音频加载失败，请检查文件路径');
    });

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            let playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    musicToggle.classList.add('playing');
                })
                .catch(error => {
                    console.log('播放失败：', error);
                    alert('音频播放失败');
                });
            }
        }
        isPlaying = !isPlaying;
    });
});