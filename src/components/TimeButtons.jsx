/**
 * Composant affichant les boutons pour lancer le timer avec le temps lui correspondant.
 * @param handleTimeValue props de la fonction handleTimeValue().
 * @returns {JSX.Element}
 */
export default function TimeButtons({handleTimeValue}) {

    return (<div className="container text-center">
        <div>
            <button
                type="button"
                className="btn btn-outline-warning btn-lg mx-3 my-2"
                onClick={(event) => {
                    handleTimeValue(event)
                }}
                value={25}>00:25
            </button>
            <button
                type="button"
                className="btn btn-outline-warning btn-lg mx-3 my-2"
                onClick={(event) => {
                    handleTimeValue(event)
                }}
                value={30}>00:30
            </button>
        </div>
        <div>
            <button
                type="button"
                className="btn btn-outline-warning btn-lg mx-3 my-2"
                onClick={(event) => {
                    handleTimeValue(event)
                }}
                value={60}>01:00
            </button>
            <button
                type="button"
                className="btn btn-outline-warning btn-lg mx-3 my-2"
                onClick={(event) => {
                    handleTimeValue(event)
                }}
                value={90}>01:30
            </button>
        </div>
        <div>
            <button
                type="button"
                className="btn btn-outline-warning btn-lg mx-3 my-2"
                onClick={(event) => {
                    handleTimeValue(event)
                }}
                value={120}>02:00
            </button>
            <button
                type="button"
                className="btn btn-outline-warning btn-lg mx-3 my-2"
                onClick={(event) => {
                    handleTimeValue(event)
                }}
                value={180}>03:00
            </button>
        </div>
    </div>);
}