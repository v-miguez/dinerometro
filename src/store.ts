import { tassign } from 'tassign'

export interface IAppState{

	token: string
	alias: string
}


export const INITIAL_STATE: IAppState = {

	token: '',
	alias: ''
}


export function rootReducer(state, action){

	switch (action.type) {
		


	}
