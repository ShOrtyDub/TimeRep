/**
 * Composant affichant les boutons pour le temps de pause.
 * @param handlePauseTime props de la fonction qui gère la pause.
 * @returns {JSX.Element}
 */
export default function PauseButtons({ handlePauseTime }) {

    return (
        <div className="container text-center">
            <h2 id="repCount" className="mt-5">Choose a break time</h2>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg mx-3 my-2"
                    onClick={() => handlePauseTime(25)}>
                    00:25
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg mx-3 my-2"
                    onClick={() => handlePauseTime(60)}>
                    01:00
                </button>
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg mx-3 my-2"
                    onClick={() => handlePauseTime(120)}>
                    02:00
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg mx-3 my-2"
                    onClick={() => handlePauseTime(180)}>
                    03:00
                </button>
            </div>
        </div>
    );
}
