import '../Css/loading.css';

function Loading(props) {
    let spinner = {
        width: props.size,
        height: props.size,
        border: `calc(${props.size} * 0.15) solid ${props.color}`,
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        // webkitAnimation: `spin ${props.delay} linear infinite`,
        animation: `spin ${props.delay} linear infinite`,
    }
    return (
        <div className="loading">
            <div style={spinner}></div>
            <div style={{ color: props.color, fontSize: `calc(${props.size}*1.2)`}}>moodBTC</div>
        </div>
    );
}
export default Loading;

//  prototype
//  <Loading size='1.5rem' delay="1s" color='#FF2E63' />