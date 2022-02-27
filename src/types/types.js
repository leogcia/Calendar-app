// {
//     id: skgfslksgfkfjadslkfj,
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     notes: 'Comprar el pastel',
//     user: {
//         _id: '123',
//         name: 'Leonardo'
//     }
// }

export const types = {

    uiOpenModal: '[UI] Open Modal',
    uiCloseModal: '[UI] Close Modal',

    eventSetActive: '[Event] Set Active',
    eventLogout: '[Event] Logout Event',

    eventStartAddNew: '[UI] Start add new',
    eventClearActiveEvent: '[Event] Clear Active Event',
    eventAddNew: '[Event] Add New',
    eventUpdated: '[Event] Event Updated',
    eventDeleted: '[Event] Event Deleted',
    eventLoaded: '[Event] Events Loaded', 

    authCheckingFinish: '[auth] Finish login state', 
    authStartLogin: '[auth] Start login', 
    authLogin: '[auth] Login', 
    authStartRegister: '[auth] Start register', 
    authStartTokenRenew: '[auth] Start token renew', 
    authLogout: '[auth] Logout', 
}