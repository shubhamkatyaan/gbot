import './App.css';
import logo from './Assets/logo.png'
import a from './Assets/Asset 6.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import rh from './Assets/dart_1.png'
import b from './Assets/ques.png'
import p1 from './Assets/p1.png'
import p2 from './Assets/p2.png'
import p3 from './Assets/p3.png'
import p4 from  './Assets/p4.png'
import s1 from './Assets/tele.png'
import s2 from './Assets/twi.png'
import s3 from './Assets/web.png'
import token from './Assets/token.png'


function App() {
  const timelineElements = [
    { title: "Creative Director", description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading" },
    { title: "Art Director", description: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing" },
    { title: "Web Designer", description: "User Experience, Visual Design" },
    { title: "Web Designer", description: "User Experience, Visual Design" },
  ];

  return (
    <>
      <div className='hero'>
        <div className='container-fluid'>
          <img className='logo' src={logo} alt="Logo" />
          <div className='container'>
            <div className='row g-0 r1'>
              <div className='col-sm-6 s2'>
                <div>
                  <h1 className='intr'>Introducing</h1>
                  <h2 className='gl'>GlockBot</h2>
                  <div className='line1'></div>
                  <p>Your passport to a thrilling and immersive experience in the realm of Telegram gaming. Equipped with state-of-the-art technology and meticulously designed for seamless engagement.</p>
                  <button type="button" className='but'>Buy Now</button>
                </div>
              </div>
              <div className='col-sm-6 s1'>
                <img className='rhi' src={rh} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sec2'>
        <div className='container'>
          <div className='row g-0 r12'>
            <div className='col-sm-6 s2'>
              <div>
                <h1 className='intr'>Welcome to</h1>
                <h2 className='gl'>GlockBot</h2>
                <div className='line1'></div>
                <p>"Glock Bot: Your key to exciting Telegram gaming!"</p>
                <p>Glock Bot seamlessly operates within the Telegram platform, streamlining your journey into the world of target shooting.</p>
                <p>Will your shots hit the target with pinpoint accuracy?</p>
                <button type="button" className='but'>Play Now</button>
              </div>
            </div>
            <div className='col-sm-6 s11'>
              <img className='rhi' src={a} alt="Image" />
            </div>
          </div>
        </div>
      </div>

      <div className='sec3'>
        <div className='container'>
          <div className='row g-0 r13'>
            <div className='col-sm-6 sr1'>
              <img src={b} alt="Image" />
            </div>
            <div className='col-sm-6 sr2'>
              <div>
                <h3 className='text-end how'>How to</h3>
                <h1 className='text-end play'>Play the Game?</h1>
                <div style={{display:"flex", justifyContent:"end"}}>
                  <div className='line3'></div>
                </div>
                <p className='text-end'>Welcome to the exhilarating world of Glock Bot! Getting in on the action is straightforward and thrilling.</p>
                <p className='text-end'>Follow these easy steps to join in the excitement:</p>
                <p className='text-end'>1. Starting a Game</p>
                <p className='text-end'>2. Placing your Shots</p>
                <p className='text-end'>3. Revealing the results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sec4 container'>
        <div className='img1a'><img src={p1} alt="Image" /></div>
        <div className='img1a'><img src={p2} alt="Image" /></div>
        <div className='img1a'><img src={p3} alt="Image" /></div>
        <div className='img1a'><img src={p4} alt="Image" /></div>
      </div>

      <div className='sec4'>
        <div className='container'>
          <div className='row g-0 r12'>
            <div className='col-sm-6 s2'>
              <div>
                <h1 className='intr'>Glock Bot</h1>
                <h2 className='gl'>Tokenomics</h2>
                <div className='line1'></div>
                <p>Token Name: Glock Token</p>
                <p>Symbol: $GLOCK</p>
                <p>Blockchain Platform: Ethereum</p>
                <p>Total Supply: 10,000,000 (10 Million)</p>
                <p>Join us in embracing the excitement of precision shooting, contributing to our vibrant community, and becoming an integral part of our journey. Glock Bot is not just a game; it's an ecosystem where your tokens work for you, and your participation makes a difference.</p>
              </div>
            </div>
            <div className='col-sm-6 s11'>
              <img className='rhii' src={token} alt="Token Image" />
            </div>
          </div>
        </div>
      </div>

      <div className='roadmap container'>
        <VerticalTimeline>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#0B1823', border: "2px solid #1FA099", color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1FA099' }}
              iconStyle={{ background: '#661D33' }}
            >
              <h3 className="vertical-timeline-element-title">{element.title}</h3>
              <p>{element.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className='hee' />
      <div className='faq'>
        <h1 className='haqh1 text-center'>FAQs</h1>
        <center><div className='lline'></div></center>
        <p className='text-center haqp'>FREQUENTLY ASKED QUESTIONS</p>
        <div className='container'>
          <div className="accordion" id="accordionExample">
            {[1, 2, 3].map((item) => (
              <div className="accordion-item" key={item}>
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item}`} aria-expanded={item === 1} aria-controls={`collapse${item}`}>
                    Accordion Item #{item}
                  </button>
                </h2>
                <div id={`collapse${item}`} className={`accordion-collapse collapse ${item === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    This is the accordion body for item #{item}.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className='hee' />
      <div className='footerm'>
        <div className='container'>
          <div className='cont row g-0'>
            <div className='col-sm-4 cont1' style={{marginTop:"20px"}}>
              <div>
                <img src={logo} alt="Logo" style={{width:"220px"}} />
                <p className='emi'>business.glockbot@gmail.com</p>
                <p className='med'>Social Media</p>
                <div className='soc'>
                  <div><img src={s1} alt="Social 1" /></div>
                  <div><img src={s2} alt="Social 2" /></div>
                  <div><img src={s3} alt="Social 3" /></div>
                </div>
              </div>
            </div>
            <div className='col-sm-8 cont2'>
              <div>
                <h5>Links</h5>
                <p>Introduction</p>
                <p>How to play</p>
                <p>Tokenomics</p>
                <p>Roadmap</p>
                <p>FAQs</p>
              </div>
              <div>
                <h5>Moderators</h5>
                <p>Support</p>
                <p>Github</p>
              </div>
              <div>
                <h5>Developers</h5>
                <p>Support</p>
                <p>How to play</p>
                <p>Tokenomics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='hee' />
      <div className='last'>
        <p className='text-center'> Copyright © 2023. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default App;
