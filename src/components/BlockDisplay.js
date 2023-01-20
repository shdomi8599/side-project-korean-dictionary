const BlockDisplay = ({ block, spellTogle, spellCount, id }) => {

    return <div className="block_display" onClick={() => {
        block();
        if (!spellTogle && localStorage.getItem(`spell1${id}`) !== null) {
            spellCount = 0;
            localStorage.removeItem(`spell1${id}`);
        }
    }}>

    </div>
}

export default BlockDisplay