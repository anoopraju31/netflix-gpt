import { useGetMovieTrailerQuery } from '../features/movieApi'
import {
	IMG_CDN_URL,
	YOUTUBE_FEATURES,
	YOUTUBE_VIDEO_URL,
} from '../utills/constants'

interface BackgroundVideoProps {
	movieId: number
	posterId: string
}

const BackgroundVideo = (props: BackgroundVideoProps) => {
	const { movieId, posterId } = props

	const { data: trailer } = useGetMovieTrailerQuery(movieId)

	if (!trailer) return <div></div>

	return (
		<div className='absolute sm:relative top-0 w-full'>
			{/* Screen >= 650px Youtube video player */}
			<div className='hidden sm:block w-full'>
				<iframe
					className='w-full aspect-video'
					src={YOUTUBE_VIDEO_URL(trailer?.key)}
					title='YouTube video player'
					allow={YOUTUBE_FEATURES}></iframe>
			</div>

			{/* Screen < 650px Movie Poster*/}
			<div className='w-full sm:hidden'>
				<img
					className='w-full aspect-video'
					src={IMG_CDN_URL + posterId}
					alt=''
				/>
			</div>
		</div>
	)
}

export default BackgroundVideo
