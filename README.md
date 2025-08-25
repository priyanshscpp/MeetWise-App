# MeetWise - Professional Video Meeting Platform

A modern, professional video conferencing application built with Next.js, featuring real-time video calls, meeting scheduling, and recording management.

## ✨ Features

- **Instant Meetings**: Start video calls immediately
- **AI Notetaker and Summarizer**: Helps user to give notes of the meet on their dashboard
- **Google Workspace Integration**: Join meetings via invitation links
- **Recording Management**: View and manage meeting recordings
- **Scheduled Meetings**: Plan and schedule meetings in advance
- **Personal Room**: Dedicated personal meeting space
- **Professional UI**: Modern, clean interface design

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Authentication**: Clerk
- **UI Components**: Radix UI, Lucide React Icons
- **Date Handling**: React DatePicker, date-fns

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meetwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with the following variables:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Starting a Meeting
1. Click on "New Meeting" to start an instant meeting
2. Use "Schedule Meeting" to plan future meetings
3. Join existing meetings via "Join Meeting"

### Navigation
- **Home**: Dashboard with meeting options
- **Upcoming**: View scheduled meetings
- **Previous**: Access past meeting history
- **Recordings**: Manage meeting recordings
- **Personal Room**: Your dedicated meeting space

## 🎨 UI Improvements

The application features a modern, professional design with:
- Clean, minimalist interface
- Consistent color scheme
- Responsive grid layouts
- Smooth animations and transitions
- Professional typography
- Glassmorphism effects

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
meetwise/
├── app/                    # Next.js app directory
│   ├── (auth)/           # Authentication routes
│   ├── (root)/           # Main application routes
│   └── globals.css       # Global styles
├── components/            # Reusable UI components
├── constants/             # Application constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── providers/             # Context providers
└── public/                # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and React
- Powered by Stream Video SDK
- Authentication by Clerk
- UI components from Radix UI
- Icons from Lucide React

---

**MeetWise** - Making professional video meetings simple and efficient.
