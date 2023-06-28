window.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.body; // Change to the desired container element

    function calculateGridSize() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const cellSize = 50; // Adjust the desired size of each grid cell

        const numColumns = Math.floor(viewportWidth / cellSize);
        const numRows = Math.floor(viewportHeight / cellSize);

        return { numColumns, numRows };
    }

    function generateGrid() {
        const { numColumns, numRows } = calculateGridSize();

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numColumns; col++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.setAttribute('data-row', row + 1); // Add data attributes for row and column indices
                gridItem.setAttribute('data-column', col + 1);
                gridContainer.appendChild(gridItem);

                // Trigger the callback function with the coordinates
                handleGridItem(row + 1, col + 1);
            }
        }
    }

    function handleGridItem(row, column) {
        // This function will be called for each grid item
        // Perform actions with the coordinates (row, column)
        console.log(`Grid item at (${row}, ${column})`);
    }

    generateGrid();

    window.addEventListener('resize', function () {
        // Clear the existing grid
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        // Generate the new grid based on the updated viewport size
        generateGrid();
    });
});
