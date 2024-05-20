// Zadanie 1. Pakowanie towarów
function isEnoughCapacity(products, containerSize) {
    const products {...arguments};
        const values = Object.values(products);
        let totalValue = 0;

        for ( const value of values) {
            totalValue += value;
        };
        if (totalValue >= containerSize) {
            return true;}
            else {return false;

            }
        };
    

    
