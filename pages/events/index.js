import EventList from '../../components/events/event-list'
import EventSearch from "../../components/events/event-search"
import { useRouter } from "next/dist/client/router"
import { getAllEvents } from '../../helpers/api-util'

const AllEventsPage = (props) => {
	const router = useRouter()
	const events = props.events

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`

		router.push(fullPath)
	}

	return (
		<>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	)
}

export const getStaticProps = async () => {
	const events = await getAllEvents()

	return {
		props: {
			events: events
		},
		revalidate: 60
	}
}

export default AllEventsPage
