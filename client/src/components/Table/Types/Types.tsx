import { Contact } from '../../../model/Contact'

export type TypePropsChangehWithItems = {
    items: Contact[],
    onChangeSearch: Function
}

export type TypePropsChangehWithItemsSearched = {
    items: Contact[],
    onChangeSearch: Function,
    itemsSearched: any[]
}

export type TypePropsEditRemoveWithItems = {
    runEdit: Function
    items: Contact
    onHandleRemove: Function
}

export type TypePropsJustRefresh = {
    refreshList: Function
}
export type TypePropsRefreshWithItems = {
    items: Contact[],
    refreshList: Function
}

export type TypeSearch = {
    readonly value: string,
    readonly label: string
}
