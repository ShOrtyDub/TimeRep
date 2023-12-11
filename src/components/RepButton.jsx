/**
 * Composant affichant le nombre de répétitions restantes, ainsi que les boutons pour les incrémenter ou décrémenter.
 * @param repCount props du nombre de répétitions restantes.
 * @param handlePlus props de la fonction handleClickUp().
 * @param handleLess props de la fonction handleClickDown().
 * @returns {JSX.Element}
 */
export default function RepButton({repCount, handlePlus, handleLess}) {

    return (<div className="container text-center mb-3">
        <h3>{repCount}</h3>
        <p id="repCount"> {repCount > 1 ? 'reps' : 'rep'} to left</p>
        <div>
            <button
                className="btn btn-success mx-3 my-3"
                type="button"
                onClick={handleLess}>
                rep -
            </button>
            <button
                className="btn btn-success mx-3 my-3"
                type="button"
                onClick={handlePlus}>
                rep +
            </button>
        </div>
    </div>);
}