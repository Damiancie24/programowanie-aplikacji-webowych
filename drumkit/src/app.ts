export class App {
    constructor() {
        this.start();
    }
    start() {
        document.addEventListener('keydown', (e) => { this.onKeyDown(e)} )
    }
    onKeyDown(e: KeyboardEvent) {
        const key = e.key;       
        switch(key) {
            case 'a':
                this.playAudio('boomAudio');
                break;
            case 's':
                this.playAudio('clapAudio');
                break;
            case 'd':
                this.playAudio('hihatAudio');
                break;
            case 'f':
                this.playAudio('kickAudio');
                break;
            case 'g':
                this.playAudio('openhatAudio');
                break;
            case 'g':
                this.playAudio('rideAudio');
                break;
            case 'g':
                this.playAudio('snareAudio');
                break;
            case 'g':
                this.playAudio('tinkAudio');
                break;
        }
    }
    playAudio(id: string) {
        const clap: HTMLAudioElement = document.querySelector('#' + id);
        clap.currentTime = 0;
        clap.play();
    }
}