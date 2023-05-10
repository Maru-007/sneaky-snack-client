import Sound from 'react-sound';

import background from './audioFiles/background1.mp3'

const PlaySound = (isPlaying) => {
    return (
        <div>
            <Sound 
                url={background}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                loop={true}
            />
        </div>
    )
}

export default PlaySound;