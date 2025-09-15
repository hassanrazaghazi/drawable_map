# Interactive Map Drawing Application

A Next.js application that allows users to draw interactive shapes on a map, add titles to them, and export the data in GeoJSON format. Built with Leaflet.js and optimized for territory mapping and geographic data collection.

## 🚀 Features

### Current Features
- **Interactive Map**: Full-screen map centered on Islamabad, Pakistan
- **Drawing Tools**: Draw polygons and rectangles on the map
- **Title Management**: Add custom titles to drawn shapes via modal input
- **Visual Feedback**: Shapes display titles as popups when clicked
- **GeoJSON Export**: Automatic console logging of shape data in GeoJSON format
- **Responsive Design**: Works on desktop and mobile devices
- **Next.js Integration**: Server-side rendering with client-side map functionality

### Technical Implementation
- **Framework**: Next.js 15.5.3 with App Router
- **Mapping Library**: Leaflet.js v1.9.4
- **Drawing Plugin**: Leaflet-Draw v1.0.4
- **Styling**: Tailwind CSS v4
- **State Management**: React hooks (useState, useRef, useEffect)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎯 How to Use

1. **Open the application** in your web browser
2. **Use drawing tools** on the left side of the map:
   - Click the polygon tool to draw custom shapes
   - Click the rectangle tool to draw rectangles
3. **Draw on the map** by clicking to place points
4. **Complete the shape** by clicking the starting point (for polygons)
5. **Add a title** when the modal appears
6. **View the data** in the browser console (F12)
7. **Click shapes** to see their titles in popups

## 📁 Project Structure

```
interactivemap/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Leaflet overrides
│   │   ├── layout.js           # Next.js root layout
│   │   └── page.js             # Main page with dynamic map import
│   └── components/
│       └── Map.js              # Interactive map component
├── map.html                    # Standalone HTML version
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🔧 Configuration

### Map Settings
```javascript
// In src/components/Map.js
const map = L.map(mapRef.current).setView([33.7, 73.0], 12);
// [latitude, longitude], zoom level
```

### Drawing Tools
```javascript
draw: {
  polygon: true,     // Enable polygon drawing
  polyline: false,   // Disable line drawing
  rectangle: true,   // Enable rectangle drawing
  circle: false,     // Disable circle drawing
  marker: false,     // Disable marker placement
}
```

## 🎨 Possible Features & Enhancements

### 🔥 High Priority Features

#### Database Integration
- **PostgreSQL + PostGIS** for storing geometric data
- **API Routes** (`/api/territories`) for CRUD operations
- **Shape persistence** across browser sessions
- **User authentication** and shape ownership

#### Enhanced Drawing Tools
- **Circle and marker support**
- **Line/polyline drawing**
- **Freehand drawing tool**
- **Shape editing** (resize, move, delete existing shapes)
- **Multi-select** and bulk operations

#### Advanced UI/UX
- **Shape list sidebar** showing all drawn territories
- **Search and filter** shapes by title or properties
- **Shape categories** with color coding
- **Measurement tools** (area, perimeter, distance)
- **Undo/Redo** functionality

### 🔮 Medium Priority Features

#### Data Management
- **Import/Export** GeoJSON files
- **CSV export** with shape properties
- **Shape validation** (prevent self-intersecting polygons)
- **Coordinate system conversion** (WGS84, UTM, etc.)

#### Collaboration Features
- **Real-time collaboration** (multiple users drawing simultaneously)
- **Comments and notes** on shapes
- **Version history** and shape revisions
- **Share links** for specific map views

#### Map Enhancements
- **Multiple base maps** (satellite, terrain, custom tiles)
- **Layer management** (show/hide different shape groups)
- **Custom markers and icons**
- **Clustering** for dense shape areas
- **Heat maps** from point data

### 🎯 Advanced Features

#### Analytics & Reporting
- **Territory statistics** (total area, shape count)
- **Overlap detection** between shapes
- **Buffer zones** around shapes
- **Spatial analysis** tools
- **Dashboard** with charts and metrics

#### Integration Capabilities
- **REST API** for third-party integrations
- **Webhook support** for shape events
- **GIS software integration** (QGIS, ArcGIS)
- **Google Maps/OpenStreetMap** switching
- **Mobile app** companion

#### Enterprise Features
- **Multi-tenant architecture**
- **Role-based permissions** (view, edit, admin)
- **Audit logging** for all shape changes
- **Backup and restore** functionality
- **Performance optimization** for large datasets

## 🛠️ Technical Improvements

### Performance Optimization
- **Virtual scrolling** for large shape lists
- **Map clustering** for performance with many shapes
- **Lazy loading** of shape data
- **Service worker** for offline functionality

### Code Quality
- **TypeScript** conversion for better type safety
- **Unit testing** with Jest and React Testing Library
- **E2E testing** with Playwright or Cypress
- **ESLint and Prettier** configuration
- **Husky** pre-commit hooks

### Infrastructure
- **Docker** containerization
- **CI/CD pipeline** setup
- **Environment variables** management
- **Production deployment** guide
- **Database migrations** system

## 🎨 UI/UX Enhancements

### Visual Improvements
- **Dark mode** support
- **Custom themes** and branding
- **Animation** for shape drawing
- **Loading states** and progress indicators
- **Responsive mobile** optimization

### Accessibility
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** mode
- **Focus management** improvements
- **ARIA labels** and semantic HTML

## 📊 Data Features

### Advanced Properties
- **Custom fields** per shape (population, area type, etc.)
- **File attachments** to shapes (images, documents)
- **Tags and categories** system
- **Rich text descriptions**
- **Metadata** tracking (created, modified dates)

### Import/Export Options
- **KML/KMZ** support for Google Earth
- **Shapefile** import/export
- **GPX** for GPS devices
- **Excel/CSV** with coordinates
- **PDF** map generation

## 🔌 API Endpoints (Future)

```javascript
// Suggested API structure
GET    /api/territories          // List all territories
POST   /api/territories          // Create new territory
GET    /api/territories/:id      // Get specific territory
PUT    /api/territories/:id      // Update territory
DELETE /api/territories/:id      // Delete territory
GET    /api/territories/export   // Export all as GeoJSON
POST   /api/territories/import   // Import from file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🆘 Support

For support, please create an issue with detailed description.

---

**Happy Mapping! 🗺️**
