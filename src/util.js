export const sortData = data => {
    let sortedData = [...data];

    sortedData.sort((first, second) => {
        if (first.cases > second.cases) {
            return -1;
        } else {
            return 1;
        }
    })

    return sortedData;
}