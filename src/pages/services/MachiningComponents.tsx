import { FaChevronRight } from 'react-icons/fa'
import coverImageUrl from '../../images/cover page.png'

const MachiningComponents = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="about-hero" style={{ backgroundImage: `url(${coverImageUrl})` }}>
                <div className="container">
                    <h1>Machining Components</h1>
                </div>
            </section>

            {/* Machining Components Content Section */}
            <section className="section">
                <div className="container">
                    <div className="story-content">
                        <p className="story-subtitle">Precision Engineering</p>
                        <h2>Machining Components</h2>
                        <p className="story-text">
                            Ameya Industries provides high-precision machining services for components used across various industrial sectors. Leveraging CNC and conventional machines, we produce complex and high-tolerance parts with consistent quality and surface finishes. Our facility supports both prototype development and mass production requirements, ensuring reliability, accuracy, and competitive lead times.
                        </p>

                        <h3>Machining Capabilities</h3>
                        <div className="components-list">
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    CNC turning, milling, and drilling operations
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Multi-axis machining for complex geometries
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Surface grinding, boring, and tapping
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Precision machining with micron-level tolerances
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Material expertise: steel, aluminum, brass, copper, and alloys
                                </div>
                            </div>
                        </div>

                        <h3>Quality Assurance</h3>
                        <div className="components-list">
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    3D CMM and digital inspection tools
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    SPC and documented inspection reports
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    In-process and post-process quality checks
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Compliance with international machining standards
                                </div>
                            </div>
                        </div>

                        <h3>Applications</h3>
                        <div className="components-list">
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Automotive powertrain and transmission components
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Industrial and hydraulic equipment parts
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Electrical connectors and enclosures
                                </div>
                            </div>
                            <div className="component-item">
                                <FaChevronRight size={16} className="component-icon" />
                                <div className="component-content">
                                    Precision assemblies for Tool and dies
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MachiningComponents
