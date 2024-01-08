import Link from 'next/link';
async function getTickerList() {
    // Fetch data from API with reevaluate the component and update the UI after certain time
    const response = await fetch('http://localhost:4000/tickets',
    {
        next:{
            // Amount of time in seconds after which the page revalidates
            revalidate: 0, // use 0 to revalidate after every request or to  opt out of caching
        }
    })
    const json =  await response.json()
    return json
    }

async function TicketList() {
    const tickets = await getTickerList(); 
  
    return (
      <>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
            </Link>
          </div>
        


        ))}
        {tickets.length === 0 && (
            <div className="card my-5">
              <h3>No tickets to show</h3>
              <p>Looks like there are no tickets to show</p>
            </div>
          )
        }
      </>
    );
  }
export default TicketList