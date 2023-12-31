import { FaImage } from 'react-icons/fa6'
import { IMG_CDN_URL } from '../utills/constants'

interface MovieCardProps {
	posterId: string
	title: string
	fixedWidth?: boolean
}

const MovieCard = (props: MovieCardProps) => {
	const { posterId, title, fixedWidth } = props
	return (
		<div
			className={`relative flex-shrink-0 cursor-pointer flex ${
				fixedWidth && 'w-36 md:w-48 '
			}`}>
			{posterId ? (
				<img
					className='rounded-xl w-full'
					src={IMG_CDN_URL + posterId}
					alt={title}
				/>
			) : (
				<div className='w-full h-full flex justify-center bg-black/70 border rounded-xl items-center text-gray-300'>
					<FaImage size={64} />
				</div>
			)}

			<div className='absolute w-full h-full hover/card:bg-black/40'></div>
		</div>
	)
}

export default MovieCard
