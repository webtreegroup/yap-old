import {
    CHATS_LOAD,
    IStoreState,
    LOADER_OFF,
    LOADER_ON,
    PROFILE_LOAD,
    SET_CONNECTED_CHATS,
    SET_CURRENT_CHAT,
    ADD_MESSAGE,
    ADD_OLD_MESSAGES,
    SET_CURRENT_CHAT_USERS,
} from './store.config'
import { IAction } from './store'

export function loaderReducer(state: IStoreState['loader'], action: IAction): IStoreState['loader'] {
    switch (action.type) {
    case LOADER_ON:
        return {
            ...state,
            active: true,
        }
    case LOADER_OFF:
        return {
            ...state,
            active: false,
        }
    default:
        return state
    }
}

export function currentUserReducer(state: IStoreState['currentUser'], action: IAction): IStoreState['currentUser'] {
    switch (action.type) {
    case PROFILE_LOAD:
        return {
            ...state,
            ...action.payload,
        }
    default:
        return state
    }
}

export function chatsReducer(state: IStoreState['chats'], action: IAction): IStoreState['chats'] {
    switch (action.type) {
    case CHATS_LOAD:
        return action.payload
    default:
        return state
    }
}

export function currentChatReducer(state: IStoreState['currentChatId'], action: IAction): IStoreState['currentChatId'] {
    switch (action.type) {
    case SET_CURRENT_CHAT:
        return action.payload
    default:
        return state
    }
}

export function currentChatUsersReducer(state: IStoreState['currentChatUsers'], action: IAction): IStoreState['currentChatUsers'] {
    switch (action.type) {
    case SET_CURRENT_CHAT_USERS:
        return action.payload
    default:
        return state
    }
}

export function connectedChatsReducer(state: IStoreState['connectedChats'], action: IAction): IStoreState['connectedChats'] {
    switch (action.type) {
    case SET_CONNECTED_CHATS:
        return {
            ...state,
            ...action.payload,
        }
    default:
        return state
    }
}

export function messagesReducer(state: IStoreState['messages'], action: IAction): IStoreState['messages'] {
    switch (action.type) {
    case ADD_MESSAGE:
        return [
            action.payload,
            ...state,
        ]
    case ADD_OLD_MESSAGES:
        return [
            ...state,
            ...action.payload,
        ]
    default:
        return state
    }
}

export const reducers = {
    loader: loaderReducer,
    currentUser: currentUserReducer,
    chats: chatsReducer,
    currentChatId: currentChatReducer,
    connectedChats: connectedChatsReducer,
    messages: messagesReducer,
    currentChatUsers: currentChatUsersReducer,
}
