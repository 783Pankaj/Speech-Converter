
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const startListeningHindi = () => SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
    const { transcript, browserSupportsSpeechRecognition,  resetTranscript} = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <>
            <div className="container">
                <h2>Your Speak Converter</h2>
                <br/>
                <p>"Here you can speek anything and Converter into English and Hindi text............" </p>

                <div className="main-content">
                    {transcript}
                </div>

                <div className="btn-style">
                <button onClick={resetTranscript}>Reset Text</button>
                    <button onClick={startListening }>Speak English</button>
                    <button onClick={startListeningHindi}>Speak Hindi</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Speaking</button>

                </div>
            </div>

        </>
    );
};
export default App;