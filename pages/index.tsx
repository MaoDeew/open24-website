import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout";
import { Header } from "../components/Home/Header"
import { CarouselWrapper } from "../components/Home/CarouselWrapper";
import LocationsList from "../components/Ubicaciones/LocationsList";
import { GetServerSideProps } from 'next'
import { Brands } from "../components/Brands/Brands";

const Home: NextPage = ({deviceType}: any) => {

  return (
    <Layout deviceType={deviceType}>
      <div>
        <Header title="Somos tiendas automáticas abiertas todos los días 24 horas" deviceType={deviceType}/>
        <div className="py-5">
          
        <CarouselWrapper />
        </div>
        <Brands deviceType={deviceType} />
        <div style={{marginTop: 2}}>
        <div id='ubicaciones' style={{marginBottom: 15}}>
          <span className="w-full text-red-500 text-3xl font-bold ">
            NUESTRAS TIENDAS
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
