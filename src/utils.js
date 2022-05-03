//constructs array of titles from thr record.
export const constructTitleArray = (result) => {
    let allTitleArray = [];
    result.map((item, index) => {
        allTitleArray.push(`Title ${item.id}`)
    })
    return allTitleArray;
}