# EveStack

EvePro is an event promotion platform designed for colleges and organizations to promote their events, hackathons, and more. It helps users discover, register, and get tickets for various events seamlessly.

## Features

- **Event Promotion**: Colleges and organizations can list their events.
- **Hackathon Listings**: Special support for hackathons, including registration and team management.
- **Ticket Booking**: Users can purchase or register for tickets through the platform.
- **Custom Event Pages**: Organizers can create detailed event pages with descriptions, schedules, and FAQs.
- **User Dashboard**: Attendees can track their registered events and tickets.
- **Rating events**: Users can rate events based on their experience.



## Installation

### Prerequisites
- Node.js (>=16)
- PostgreSQL
- Docker 
- PrismaORM

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ethics03/EvePro.git
   cd evepro
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   ```bash
   cp .env.example .env
   # Edit the .env file with your database and API keys
   ```
4. Run the database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- Visit `http://localhost:3000` to access the platform.

