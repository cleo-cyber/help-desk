import next from "next";

async function getTicketDetails(id) {
    const response = await fetch(`http://localhost:4000/tickets/${id}`,{
    next: {
        revalidate: 60, // Revalidate every minute
        }

});
    const json = await response.json();
    return json;
  }
  
  async function TicketDetails({ params }) {
    const ticket = await getTicketDetails(params.id);
  
    return (
      <main>
        <nav>
          <h2>Ticket Details</h2>
        </nav>
        <div className="card my-5">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </main>
    );
  }
  
  export default TicketDetails;
  