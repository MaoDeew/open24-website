import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { Header } from "../components/Home/Header"
import { CarouselWrapper } from "../components/Home/CarouselWrapper";
import LocationsList from "../components/Ubicaciones/LocationsList";
import { GetServerSideProps } from 'next'

const Home: NextPage = ({deviceType}: any) => {

  return (
    <Layout deviceType={deviceType}>
      <div>
        <Header title="BIENVENIDOS. Somos el único autoservicio Vending 24 horas todos los días" deviceType={deviceType}/>
        <div className="py-5">
        <CarouselWrapper />
        </div>
        <div>
        <div id='ubicaciones' style={{marginBottom: 15}}>
          <span className="w-full text-red-500 text-3xl font-bold ">
            Nuestros Puntos
          </span>
        </div>
        <LocationsList />
      </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps : GetServerSideProps = async (context) => {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
  
  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop'
    }
  }
}

export default Home;
