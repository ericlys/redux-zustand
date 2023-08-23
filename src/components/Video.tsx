import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=TRa55WbWnvQ&list=PL85ITvJ7FLohA3_EluJeYMFc4YvR2FuZy"
      />
    </div>
  )
}