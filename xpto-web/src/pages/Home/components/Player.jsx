import ReactPlayer from "react-player";


const Player = ({
    url
}) => {
    return (
        <ReactPlayer width='80%'  url={url} />
    )
}
export default Player