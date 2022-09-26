import React from 'react';
import TecnologoInformaticaLogo from "../../img/TipLogo.png";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer2 = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <img src={TecnologoInformaticaLogo} className='w-50' />
          </MDBBtn>
          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn> */}
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Desarrolladores:
        <a className='text-white' href='https://github.com/AyalaTon'>
          Milton Ayala
        </a>
        <a>&nbsp;y&nbsp;</a>
        <a className='text-white' href='https://github.com/federzvz'>
           Federico Rodriguez
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer2;