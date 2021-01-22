import React, {
	useRef,
	useEffect,
	useImperativeHandle,
	forwardRef,
} from 'react'

// useRef useImperativeHandle
const ChildInputComponent = (props, ref) => {
	const inputRef = useRef(null)
	useImperativeHandle(ref, () => inputRef.current)
	return <input type="text" name="child input" ref={inputRef} />
}

const ChildInput = forwardRef(ChildInputComponent)

export default () => {
	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div>
			<ChildInput ref={inputRef} />
		</div>
	)
}
