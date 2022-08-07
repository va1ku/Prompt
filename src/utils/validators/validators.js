


export const RequiredField = (maxLength = false) =>(value) =>{
	let error;

	if (!value) {
		error = `Field is required`
	};
	
	if (maxLength && value.length > maxLength) {
		error = `Max length ${maxLength} symbols`
		return error
	}

	return error;
}

