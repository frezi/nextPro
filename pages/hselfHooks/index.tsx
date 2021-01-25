import { useState, useEffect } from 'react'

//自定义Hooks函数 复用函数  这个函数是多个地方要用到 比如功能或调接口
//底层原理是用到绑定了useEffect钩子 封装成属于自定义钩子
const useFriendStatus = (defaultIsOnlineValue) => {
	const [isOnline, setIsOnline] = useState(null)

	const handleStatusChange = (status) => {
		setIsOnline(status)
	}

	useEffect(() => {
		handleStatusChange(defaultIsOnlineValue)
		return () => {
			handleStatusChange(!defaultIsOnlineValue)
		}
	})
	return isOnline
}

export default () => {
	const isOnline = useFriendStatus(1)
	//useFriendStatus异步执行 所以console.log 值为null
	console.log(isOnline, 'isOnline')
	return <li style={{ color: isOnline ? 'green' : 'black' }}>fff</li>
}
