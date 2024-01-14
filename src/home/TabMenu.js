import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import "../category_css/Menu.css";
import menu from '../data/menu.json';

export default function TabMenu() {
  const [constn1, setConstn1] = useState([]);
  const [constn2, setConstn2] = useState([]);
  const [constn3, setConstn3] = useState([]);
  const [constn4, setConstn4] = useState([]);
  const [constn5, setConstn5] = useState([]);
  const [constn6, setConstn6] = useState([]);

  const [additionalItem1, setAdditionalItem1] = useState([]);
  const [additionalItem2, setAdditionalItem2] = useState([]);
  const [additionalItem3, setAdditionalItem3] = useState([]);
  const [additionalItem4, setAdditionalItem4] = useState([]);
  const [additionalItem5, setAdditionalItem5] = useState([]);
  const [additionalItem6, setAdditionalItem6] = useState([]);

  useEffect(() => {
    setConstn1(menu.sea);
    setAdditionalItem1(menu.sea2);
    setConstn2(menu.khaivi1);
    setAdditionalItem2(menu.khaivi2);
    setConstn3(menu.nuong);
    setAdditionalItem3(menu.lau);
    setConstn4(menu.sotcham1);
    setAdditionalItem4(menu.sotcham2);
    setConstn5(menu.trangmieng1);
    setAdditionalItem5(menu.trangmieng2);
    setConstn6(menu.douong1);
    setAdditionalItem6(menu.douong2);
  }, []);

  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
    setConstn1(menu.sea);
    setAdditionalItem1(menu.sea2);
    setConstn2(menu.khaivi1);
    setAdditionalItem2(menu.khaivi2);
    setConstn3(menu.nuong);
    setAdditionalItem3(menu.lau);
    setConstn4(menu.sotcham1);
    setAdditionalItem4(menu.sotcham2);
    setConstn5(menu.trangmieng1);
    setAdditionalItem5(menu.trangmieng2);
    setConstn6(menu.douong1);
    setAdditionalItem6(menu.douong2);
  };

  return (
    <>
      <div>
        <div className="logo">
          <img src={"/image/chuchu.png"} alt="" style={{width:"286px"}} />
        </div>
        <div className="styled-text">
            <div className='tt'>
                <hr className="line" />
            </div>
            <p style={{fontSize:'30px', textAlign:'center', marginLeft:'10px', color:'white'}}>MENU ĐA DẠNG VỚI 100+ MÓN</p>
            <div className='rr'><hr className="line" /></div>
        </div>
        <MDBTabs className='mb-6' style={{ display: 'flex', justifyContent: 'center', marginTop: "20px"}}>
          <MDBTabsItem style={{ width: 'auto' }}>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} style={{borderRadius:"10px",border:"1px solid yellow",marginBottom:"15px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Món chính
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ width: 'auto' }}>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={{borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Khai vị
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ width: 'auto' }}>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'} style={{borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Nướng & Lẩu
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ width: 'auto' }}>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'} style={{borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Sốt chấm
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ width: 'auto' }}>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'} style={{borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Tráng Miệng
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem style={{ width: 'auto' }}>
            <MDBTabsLink className='custom-tab-link' onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'} style={{borderRadius:"10px",border:"1px solid yellow",marginBottom:"10px",marginRight:"20px",fontWeight:"bold",fontFamily:"serif"}}>
              Đồ uống
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

<MDBTabsContent>
  <MDBTabsPane open={basicActive === 'tab1'}>
    <div className="tab-pane" role="tabpanel">
      <div className="menu-container">
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <div style={{ width: "400px" }}>
            <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white",textAlign:"center"}}>Hải sản nướng tại quầy</p>
            <div className="menu-buffet-item height-full-colunm">
              <ul className="uk-list list-food">
                {constn1.map((constn, index) => (
                  <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                    <div className="item-left">
                      <span style={{ fontSize: "19px" }}>{constn.name}</span><br />
                      <small>{constn.description}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ width: "400px" }}>
            <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white",textAlign:"center" }}>Hải Sản Hấp </p>
            <div className="menu-buffet-item height-full-colunm" style={{ paddingRight: "30px" }}>
              <ul className="uk-list list-food">
                {additionalItem1.map((additionalItems, index) => (
                  <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                    <div className="item-left">
                      <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                      <small>{additionalItems.description}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MDBTabsPane>
  <MDBTabsPane open={basicActive === 'tab2'}>
  <div className="tab-pane fade show active" role="tabpanel">
    <div className="menu-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white",textAlign:"center" }}>CÁC MÓN SALAD</p>
        <div className="menu-buffet-item height-full-colunm">
          <ul className="uk-list list-food">
            {constn2.map((constn, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div className="item-left">
                  <span style={{ fontSize: "19px" }}>{constn.name}</span><br />
                  <small>{constn.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white",textAlign:"center" }}>SÚP & CHÁO</p>
        <div className="menu-buffet-item height-full-colunm" style={{ paddingRight: "30px" }}>
          <ul className="uk-list list-food">
            {additionalItem2.map((additionalItems, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div className="item-left">
                  <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                  <small>{additionalItems.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
 </MDBTabsPane>
 <MDBTabsPane open={basicActive === 'tab3'}>
  <div className="tab-pane fade show active" role="tabpanel">
    <div className="menu-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white",textAlign:"center" }}>Nướng BBQ tại bàn</p>
        <div className="menu-buffet-item height-full-colunm">
          <ul className="uk-list list-food">
            {constn3.map((constn, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div className="item-left">
                  <span style={{ fontSize: "19px" }}>{constn.name}</span><br />
                  <small>{constn.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white",textAlign:"center" }}>Lẩu các loại</p>
        <div className="menu-buffet-item height-full-colunm" style={{ paddingRight: "30px" }}>
          <ul className="uk-list list-food">
            {additionalItem3.map((additionalItems, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div className="item-left">
                  <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                  <small>{additionalItems.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</MDBTabsPane>
<MDBTabsPane open={basicActive === 'tab4'}>
  <div className="tab-pane fade show active" role="tabpanel">
    <div className="menu-container" style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold" }}></p>
        <div className="menu-buffet-item height-full-colunm">
          <ul className="uk-list list-food">
            {constn4.map((constn, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div className="item-left">
                  <span style={{ fontSize: "19px" }}>{constn.name}</span><br />
                  <small>{constn.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold" }}></p>
        <div className="menu-buffet-item height-full-colunm" style={{ paddingRight: "30px" }}>
          <ul className="uk-list list-food">
            {additionalItem4.map((additionalItems, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div className="item-left">
                  <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                  <small>{additionalItems.description}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</MDBTabsPane>
<MDBTabsPane open={basicActive === 'tab5'}>
  <div className="tab-pane fade show active" role="tabpanel">
    <div className="menu-container">
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <div style={{ width: "400px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white", textAlign:"center" }}>Chè & Thạch Rau Câu</p>
          <div className="menu-buffet-item height-full-colunm">
            <ul className="uk-list list-food">
              {constn5.map((constn, index) => (
                <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                  <div className="item-left">
                    <span style={{ fontSize: "19px" }}>{constn.name}</span><br />
                    <small>{constn.description}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ width: "450px" }}>
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white", textAlign:"center" }}>Bánh Ngọt</p>
          <div className="menu-buffet-item height-full-colunm" style={{ paddingRight: "30px" }}>
            <ul className="uk-list list-food">
              {additionalItem5.map((additionalItems, index) => (
                <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                  <div className="item-left">
                    <span style={{ fontSize: "19px" }}>{additionalItems.name}</span>
                    <small>{additionalItems.description}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</MDBTabsPane>
<MDBTabsPane open={basicActive === 'tab6'}>
  <div className="menu-container">
    <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
      <div className="">
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white", textAlign:"center" }}>Rượu</p>
        <div className="menu-buffet-item" style={{ width: "441px" }}>
          <ul className="uk-list list-food">
            {constn6.map((constn, index) => (
              <li key={index} className="uk-flex uk-flex-middle uk-flex-space-between">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="item-left">
                <span style={{ fontSize: "19px" }}>{constn.name}</span><br/>
              </div>
              <div className="item-right" style={{ textAlign: "right", marginRight:"20px", }}>
                <span style={{ fontSize: "16px"}}>{constn.description}</span>
              </div></div>
            </li>            
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <p style={{ fontSize: '30px', fontFamily: "serif", fontWeight: "bold", color: "white", textAlign:"center"}}>Nước Ép</p>
        <div className="menu-buffet-item" style={{ width: "441px" }}>
          <ul className="uk-list list-food">
            {additionalItem6.map((additionalItems, index) => (
              <li key={index} className="uk-flex uk-flex-wrap uk-flex-middle uk-flex-space-between">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="item-left">
                  <span style={{ fontSize: "19px"}}>{additionalItems.name}</span>
                </div>
                <div className="item-right" style={{ textAlign: "right", marginRight:"20px", }}>
                  <span style={{ fontSize: "16px" }}>{additionalItems.description}</span>
                </div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</MDBTabsPane>



</MDBTabsContent>

      </div>
    </>
  );
}
