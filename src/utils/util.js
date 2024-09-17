import { sidebarData } from "../database/data"

export const regEx = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/g

const cleanText = (text) =>
    text
        .toLocaleLowerCase()
        .replaceAll(regEx, ' ')
        .replaceAll('  ', ' ')
        .replaceAll('-', ' ')

export const isValidResource = (name) => {
    if (!name) return

    const subCategoryNames = []
    sidebarData.forEach((category) =>
        category.subcategory.forEach((subcategory) =>
        subCategoryNames.push(subcategory.url?.replaceAll('/', ''))
        )
    )

    const isValid = !!subCategoryNames?.find(
        (n) => cleanText(n) === cleanText(name)
    )

    return isValid
}
