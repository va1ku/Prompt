

export const UpdateObjectInArray = (Array, objPropName, compareElement, newObjectProps) => {
	return Array.map((el) => {
		if (el[objPropName] === compareElement) {
			return { ...el, ...newObjectProps }
		}
		return el
	})
}