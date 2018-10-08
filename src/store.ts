import { tassign } from 'tassign'

export interface IAppState {

<<<<<<< HEAD
	dinero: number
	hora: number
=======
	netoHoras: number
	
>>>>>>> 7a0e1941aaf8671a8819d60790cd7d2d34299727
}


// export const INITIAL_STATE: IAppState = {

<<<<<<< HEAD
// 	// this.dinero = 0,
// 	// hora = 0
// }
=======
	netoHoras: 10
}
>>>>>>> 7a0e1941aaf8671a8819d60790cd7d2d34299727


export function rootReducer(state, action){

	switch (action.type) {
		case "GUARDAR_NETO": 
		 return tassign(state, action.data)


	}
<<<<<<< HEAD
=======

	return state
>>>>>>> 7a0e1941aaf8671a8819d60790cd7d2d34299727
}