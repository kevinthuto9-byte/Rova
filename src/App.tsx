export default function App() {
  return (
    <div>

      {/* NAV */}
      <nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 48px',position:'sticky',top:0,background:'white',zIndex:100,borderBottom:'1px solid #f0f0f0'}}>
        <div style={{fontSize:26,fontWeight:900,letterSpacing:-1}}>rova</div>
        <div style={{display:'flex',gap:32}}>
          <a href="#" style={{textDecoration:'none',color:'#444',fontSize:15,fontWeight:500}}>Ride</a>
          <a href="#" style={{textDecoration:'none',color:'#444',fontSize:15,fontWeight:500}}>Drive</a>
          <a href="#" style={{textDecoration:'none',color:'#444',fontSize:15,fontWeight:500}}>Business</a>
          <a href="#" style={{textDecoration:'none',color:'#444',fontSize:15,fontWeight:500}}>About</a>
        </div>
        <div style={{display:'flex',gap:12}}>
          <button style={{background:'none',border:'none',fontSize:15,fontWeight:600,cursor:'pointer'}}>Log in</button>
          <button style={{background:'#000',color:'white',border:'none',padding:'12px 24px',borderRadius:100,fontSize:14,fontWeight:600,cursor:'pointer'}}>Sign up</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{background:'#000',color:'white',padding:'100px 48px',minHeight:'80vh',display:'flex',alignItems:'center'}}>
        <div style={{maxWidth:600}}>
          <h1 style={{fontSize:80,fontWeight:900,lineHeight:1,letterSpacing:-3,marginBottom:24}}>Go anywhere<br />with Rova</h1>
          <p style={{fontSize:18,color:'#aaa',lineHeight:1.6,marginBottom:40,maxWidth:480}}>Request a ride, hop in, and go. Available in cities across Africa and beyond.</p>
          <div style={{display:'flex',gap:16}}>
            <button style={{background:'white',color:'black',border:'none',padding:'18px 36px',borderRadius:100,fontSize:16,fontWeight:700,cursor:'pointer'}}>Get a ride</button>
            <button style={{background:'transparent',color:'white',border:'2px solid white',padding:'18px 36px',borderRadius:100,fontSize:16,fontWeight:700,cursor:'pointer'}}>Start driving</button>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',borderBottom:'1px solid #eee'}}>
        {[['50,000+','Rides completed'],['120+','Cities covered'],['4.9★','Average rating'],['10,000+','Active drivers']].map(([num,label])=>(
          <div key={label} style={{padding:'48px 24px',textAlign:'center',borderRight:'1px solid #eee'}}>
            <div style={{fontSize:42,fontWeight:900,letterSpacing:-1,marginBottom:8}}>{num}</div>
            <div style={{fontSize:14,color:'#666'}}>{label}</div>
          </div>
        ))}
      </div>

      {/* RIDE SECTION */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',minHeight:'60vh'}}>
        <div style={{background:'#f6f6f6',padding:'80px 48px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <p style={{fontSize:13,fontWeight:700,letterSpacing:2,textTransform:'uppercase',marginBottom:16,color:'#666'}}>For Riders</p>
          <h2 style={{fontSize:52,fontWeight:900,letterSpacing:-2,lineHeight:1.1,marginBottom:20}}>The ride you want,<br />when you want it</h2>
          <p style={{fontSize:16,color:'#666',lineHeight:1.7,marginBottom:32,maxWidth:400}}>Get picked up by a top-rated driver in minutes. Rova works in your city and cities around the world.</p>
          <button style={{background:'#000',color:'white',border:'none',padding:'18px 36px',borderRadius:100,fontSize:16,fontWeight:700,cursor:'pointer',width:'fit-content'}}>Get started</button>
        </div>
        <div style={{background:'#000',padding:'80px 48px',display:'flex',flexDirection:'column',justifyContent:'center',color:'white'}}>
          <p style={{fontSize:13,fontWeight:700,letterSpacing:2,textTransform:'uppercase',marginBottom:16,color:'#888'}}>For Drivers</p>
          <h2 style={{fontSize:52,fontWeight:900,letterSpacing:-2,lineHeight:1.1,marginBottom:20}}>Drive when<br />you want</h2>
          <p style={{fontSize:16,color:'#888',lineHeight:1.7,marginBottom:32,maxWidth:400}}>Make money on your schedule. Drive a few hours or full time — it is up to you.</p>
          <div style={{display:'flex',flexDirection:'column',gap:16,marginBottom:32}}>
            {[['BWP 5,000+','Average monthly earnings'],['Flexible','Your own schedule'],['Weekly','Fast payouts']].map(([val,desc])=>(
              <div key={val} style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #222',paddingBottom:12}}>
                <span style={{fontWeight:700,fontSize:16}}>{val}</span>
                <span style={{color:'#888',fontSize:14}}>{desc}</span>
              </div>
            ))}
          </div>
          <button style={{background:'white',color:'black',border:'none',padding:'18px 36px',borderRadius:100,fontSize:16,fontWeight:700,cursor:'pointer',width:'fit-content'}}>Start driving</button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{padding:'100px 48px',background:'white'}}>
        <p style={{fontSize:13,fontWeight:700,letterSpacing:2,textTransform:'uppercase',marginBottom:16,color:'#666'}}>How it works</p>
        <h2 style={{fontSize:52,fontWeight:900,letterSpacing:-2,marginBottom:64}}>Three steps to your ride</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:48}}>
          {[['01','Enter your destination','Open the app, enter where you want to go and see available rides nearby.'],['02','Match with a driver','We instantly match you with the closest available driver in your area.'],['03','Ride and pay','Enjoy your trip and pay seamlessly in the app. No cash needed.']].map(([num,title,desc])=>(
            <div key={num}>
              <div style={{fontSize:72,fontWeight:900,color:'#eee',letterSpacing:-3,marginBottom:16}}>{num}</div>
              <h3 style={{fontSize:22,fontWeight:700,marginBottom:12}}>{title}</h3>
              <p style={{fontSize:15,color:'#666',lineHeight:1.7}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SAFETY */}
      <div style={{background:'#000',color:'white',padding:'100px 48px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
        <div>
          <p style={{fontSize:13,fontWeight:700,letterSpacing:2,textTransform:'uppercase',marginBottom:16,color:'#888'}}>Safety first</p>
          <h2 style={{fontSize:52,fontWeight:900,letterSpacing:-2,lineHeight:1.1,marginBottom:20}}>Your safety is built into every ride</h2>
          <p style={{fontSize:16,color:'#888',lineHeight:1.7}}>From verified drivers to real-time trip sharing, we have got you covered every step of the way.</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:24}}>
          {['Real-time trip tracking shared with loved ones','24/7 emergency support button in the app','All drivers verified with background checks','Cashless payments — no need to carry cash','Two-way ratings keep everyone accountable'].map(item=>(
            <div key={item} style={{display:'flex',alignItems:'center',gap:16,borderBottom:'1px solid #222',paddingBottom:20}}>
              <span style={{color:'#4ade80',fontSize:20,fontWeight:700}}>✓</span>
              <span style={{fontSize:15,color:'#ccc'}}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{padding:'100px 48px',background:'#f6f6f6'}}>
        <p style={{fontSize:13,fontWeight:700,letterSpacing:2,textTransform:'uppercase',marginBottom:16,color:'#666'}}>Reviews</p>
        <h2 style={{fontSize:52,fontWeight:900,letterSpacing:-2,marginBottom:64}}>What riders say</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
          {[['TM','Thabo M.','Gaborone, Botswana','Rova is the best ride app I have used. Fast, affordable and the drivers are always professional.'],['AN','Amara N.','Lagos, Nigeria','I use Rova every day to get to work. Never been late since I started using it.'],['SK','Sarah K.','Nairobi, Kenya','Finally a ride app that actually works in my city. The pricing is fair and transparent.']].map(([init,name,loc,quote])=>(
            <div key={name} style={{background:'white',padding:32,borderRadius:16}}>
              <p style={{fontSize:15,color:'#444',lineHeight:1.7,marginBottom:24,fontStyle:'italic'}}>"{quote}"</p>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:40,height:40,background:'#000',color:'white',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:700}}>{init}</div>
                <div>
                  <div style={{fontSize:14,fontWeight:700}}>{name}</div>
                  <div style={{fontSize:13,color:'#999'}}>{loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOWNLOAD */}
      <div style={{padding:'100px 48px',textAlign:'center',background:'white'}}>
        <h2 style={{fontSize:52,fontWeight:900,letterSpacing:-2,marginBottom:16}}>Get the Rova app</h2>
        <p style={{fontSize:16,color:'#666',marginBottom:40}}>Available on iOS and Android. Download now and get your first ride free.</p>
        <div style={{display:'flex',gap:16,justifyContent:'center'}}>
          <button style={{background:'#000',color:'white',border:'none',padding:'18px 36px',borderRadius:12,fontSize:16,fontWeight:700,cursor:'pointer'}}>App Store</button>
          <button style={{background:'#000',color:'white',border:'none',padding:'18px 36px',borderRadius:12,fontSize:16,fontWeight:700,cursor:'pointer'}}>Google Play</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{padding:'48px',borderTop:'1px solid #f0f0f0',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontSize:22,fontWeight:900}}>rova</div>
        <div style={{display:'flex',gap:24}}>
          {['Privacy','Terms','Support','Careers'].map(l=>(
            <a key={l} href="#" style={{textDecoration:'none',color:'#666',fontSize:14}}>{l}</a>
          ))}
        </div>
        <p style={{fontSize:13,color:'#999'}}>2026 Rova. All rights reserved.</p>
      </footer>

    </div>
  )
}