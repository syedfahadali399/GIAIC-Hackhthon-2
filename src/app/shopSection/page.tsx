import { Poppins } from "next/font/google";
import Link from "next/link";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["700"] });

let ShopSection = () => {
  return (
    <section className={fontPoppins.className}>
      {/* Landing Page 1 */}
      <div className="w-full h-[300px] bg-[url('/shopSection.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%]">
        <div className="flex flex-col h-[300px] items-center justify-center">
          <div className="w-[124px] h-[72px]">
            <h1 className="w-[124px] h-[72px] font-medium text-[48px] text-[#000000] opacity-[100%]">
              Shop
            </h1>
          </div>
          <div className="flex flex-row gap-[8px]">
            <p className="w-[48px] h-[24px] font-medium text-[16px] text-[#000000]">
              Home
            </p>
            <img
              className="w-[20px] h-[20px]"
              src="/shopicon/sidearrow.png"
              alt="sidearrow"
            />
            <p className="w-[41px] h-[24px] font-light text-[14px] text-[#000000]">
              Shop
            </p>
          </div>
        </div>
      </div>

      {/* Landing Page 2 */}
      <div className="w-full bg-[#F9F1E7] h-[100px] flex items-center justify-around">
        <div className="flex flex-row gap-[34px] items-center">
          <div className="w-[105px] h-[30px] flex flex-row gap-[8px] items-center">
            <img
              className="w-[25px] h-[25px]"
              src="/shopicon/iconone.png"
              alt="iconone"
            />
            <p className="w-[68px] h-[30px] font-normal text-[24px] text-[#000000]">
              Filter
            </p>
          </div>
          <img
            className="w-[28px] h-[28px]"
            src="/shopicon/icontwo.png"
            alt="icontwo"
          />
          <img
            className="w-[24px] h-[24px]"
            src="/shopicon/iconthree.png"
            alt="iconthree"
          />
          <div className="w-[225px] h-[24px]">
            <p className="w-[225px] h-[24px] font-normal text-[16px] text-[#000000]">
              Showing 1–16 of 32 results
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[34px]">
          <div className="h-[55px] flex flex-row items-center gap-[12px]">
            <p className="w-[54px] h-[30px] font-normal text-[20px] text-[#000000]">
              Show
            </p>
            <div className="w-[55px] flex flex-col items-center justify-center bg-[#FFFF]">
              <p className="w-[20px] h-[30px] font-normal text-[20px] text-[#9F9F9F]">
                16
              </p>
            </div>
          </div>

          <div className="h-[55px] flex flex-row items-center gap-[12px]">
            <p className="w-[100px] h-[30px] font-normal text-[20px] text-[#000000]">
              Short by
            </p>
            <div className="w-[148px] flex flex-col items-center justify-center bg-[#FFFF]">
              <p className="w-[72px] h-[30px] font-normal text-[20px] text-[#9F9F9F]">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Landing Page 3 */}
      <section className="w-full h-[2250px] flex flex-col gap-[64px] mt-[64px] max-2xl:h-[2130px] max-xl:h-[3050px]">
        <div className="grid grid-cols-4 gap-[42px] justify-items-center max-2xl:gap-[24px] max-xl:grid-cols-3">
          <div className="w-[285px] h-[486px] flex flex-col">
            <div className="flex flex-row relative rounded-lg shadow-md">
              <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -30%
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgone.png"
                alt="Imageone"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="font-semibold text-[24px] text-[#3A3A3A] w-[123px] h-[29px]">
                  Syltherine
                </h1>
                <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Stylish cafe chair
                </p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="relative group w-[285px] h-[446px] bg-gray-100 overflow-hidden rounded-lg shadow-md">
             {/* Background Image */}
             <div className="w-[285px] h-[301px]">
               <img src="/landingpagetwo/imgtwo.png" alt="Product" className="w-[285px] h-[301px]"/>
             </div>
  
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Add to Cart Button */}
            <Link href={`singleproductSection`}><button className="mb-4 px-6 py-2 bg-[#FFFF] text-[#B88E2F] font-semibold shadow-md hover:bg-[#FFFF]">
               Add to Cart
            </button></Link> 
            {/* Share, Compare, Like */}
            <div className="flex space-x-6 text-white">
              <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                <i className="fas fa-share-alt"></i>
                <span>Share</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                <i className="fas fa-exchange-alt"></i>
                <span>Compare</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:text-gray-300">
                <i className="fas fa-heart"></i>
                <span>Like</span>
              </div>
            </div>
           </div>
           {/* Product Details */}
          <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[92px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">Leviosa</h1>
                <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">Stylish cafe chair</p>
              </div>
              <div className="w-[265px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]"> Rp 2.500.000</p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative">
              <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -50%
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgthree.png"
                alt="Imagethree"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[85px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  lolitho
                </h1>
                <p className="w-[121px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Luxury big sofa
                </p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative justify-center">
              <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgfour.jpg"
                alt="Imagefour"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                <h1 className=" w-[123px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Respira
                </h1>
                <p className="w-[235px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Outdoor bar table and stool
                </p>
              </div>
              <div className="w-[265px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <img
              className="w-[285px] h-[301px] rounded-lg"
              src="/landingpagetwo/imgfive.png"
              alt="Imagefive"
            />
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[59px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Grifo
                </h1>
                <p className="w-[90px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Night lamp
                </p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 1.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative justify-center">
              <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgsix.png"
                alt="Imagesix"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138x] h-[61px] flex flex-col gap-[12px]">
                <h1 className=" w-[86px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Muggo
                </h1>
                <p className="w-[88px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Small mug
                </p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 150.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative">
              <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -50%
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgseven.jpg"
                alt="Imageseven"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[82px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Pingky
                </h1>
                <p className="w-[103px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Cute bed set
                </p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative justify-center">
              <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgeight.jpg"
                alt="Imageeight"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[64px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Potty
                </h1>
                <p className="w-[168px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Minimalist flower pot
                </p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative">
              <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -30%
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgone.png"
                alt="Imageone"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="font-semibold text-[24px] text-[#3A3A3A] w-[123px] h-[29px]">
                  Syltherine
                </h1>
                <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Stylish cafe chair
                </p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through">
                  Rp 3.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <img
              className="w-[285px] h-[301px] rounded-lg"
              src="/landingpagetwo/imgtwo.png"
              alt="Imagetwo"
            />
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[92px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Leviosa
                </h1>
                <p className="w-[138px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Stylish cafe chair
                </p>
              </div>
              <div className="w-[265px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 2.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative">
              <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -50%
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgthree.png"
                alt="Imagethree"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[85px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  lolitho
                </h1>
                <p className="w-[121px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Luxury big sofa
                </p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative justify-center">
              <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgfour.jpg"
                alt="Imagefour"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                <h1 className=" w-[123px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Respira
                </h1>
                <p className="w-[235px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Outdoor bar table and stool
                </p>
              </div>
              <div className="w-[265px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <img
              className="w-[285px] h-[301px] rounded-lg"
              src="/landingpagetwo/imgfive.png"
              alt="Imagefive"
            />
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[59px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Grifo
                </h1>
                <p className="w-[90px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Night lamp
                </p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 1.500.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative justify-center">
              <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgsix.png"
                alt="Imagesix"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138x] h-[61px] flex flex-col gap-[12px]">
                <h1 className=" w-[86px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Muggo
                </h1>
                <p className="w-[88px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Small mug
                </p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 150.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative">
              <div className="w-[45px] h-[48px] flex items-center absolute left-56 top-6 border border-[#E97171] rounded-[50%] bg-[#E97171]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  -50%
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgseven.jpg"
                alt="Imageseven"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[138px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[82px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Pingky
                </h1>
                <p className="w-[103px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Cute bed set
                </p>
              </div>
              <div className="w-[265px] h-[30px] flex flex-row gap-[12px] items-center">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 7.000.000
                </p>
                <p className="w-[111px] h-[24px] font-normal text-[16px] text-[#B0B0B0] line-through">
                  Rp 14.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-[285px] h-[446px] flex flex-col rounded-lg shadow-md">
            <div className="flex flex-row relative justify-center">
              <div className="w-[45px] h-[48px] flex items-center text-center absolute left-56 top-6 border border-[#2EC1AC] rounded-[50%] bg-[#2EC1AC]">
                <div className="w-[42px] h-[24px] text-[#FFFF] text-[16px] font-medium">
                  New
                </div>
              </div>
              <img
                className="w-[285px] h-[301px] rounded-lg"
                src="/landingpagetwo/imgeight.jpg"
                alt="Imageeight"
              />
            </div>
            <div className="w-[285px] h-[145px] bg-[#F4F5F7] flex flex-col justify-evenly p-[12px]">
              <div className="w-[235px] h-[61px] flex flex-col gap-[12px]">
                <h1 className="w-[64px] h-[29px] font-semibold text-[24px] text-[#3A3A3A]">
                  Potty
                </h1>
                <p className="w-[168px] h-[24px] text-[16px] font-medium text-[#898989]">
                  Minimalist flower pot
                </p>
              </div>
              <div className="w-[138px] h-[30px]">
                <p className="w-[138px] h-[30px] font-semibold text-[20px] text-[#3A3A3A]">
                  Rp 500.000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[90px] flex flex-row items-center justify-center gap-[24px]">
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-[#B88E2F]">
            <p className="w-[7px] h-[30px] text-[#FFFF]">1</p>
          </div>
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-[#F9F1E7]">
            <p className="w-[7px] h-[30px] font-semibold text-[#000000]">2</p>
          </div>
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center bg-[#F9F1E7]">
            <p className="w-[7px] h-[30px] text-[#000000]">3</p>
          </div>
          <div className="w-[98px] h-[60px] flex flex-col items-center justify-center bg-[#F9F1E7]">
            <p className="w-[43px] h-[30px] text-[20px] font-light text-[#000000]">
              Next
            </p>
          </div>
        </div>
      </section>

      {/* Landing Page 4*/}
      <section className="h-[270px] bg-[#FAF3EA]">
        <div className="h-[270px] flex flex-row gap-[42px] items-center justify-center max-2xl:gap-[24px] max-xl:grid max-xl:grid-cols-2">
            <div className="h-[70px] gap-[10px] flex flex-row items-center">
                <img className="w-[60px] h-[60px]" src="/shopicon/imagefour.png" alt="imgfour" />
                <div className="w-full h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[187px] h-[38px] font-semibold text-[25px] text-[#242424]">High Quality</p>
                    <p className="w-[275px] h-[30px] font-medium text-[20px] text-[#898989]">crafted from top materials</p>
                </div>
            </div>
            <div className="h-[70px] gap-[10px] flex flex-row items-center">
                <img className="w-[60px] h-[60px]" src="/shopicon/imagefive.png" alt="imgfive" />
                <div className="h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[278px] h-[38px] font-semibold text-[25px] text-[#242424]">Warranty Protection</p>
                    <p className="w-[126px] h-[30px] font-medium text-[20px] text-[#898989]">Over 2 years</p>
                </div>
            </div>
            <div className="h-[70px] gap-[10px] flex flex-row items-center">
                <img className="w-[60px] h-[60px]" src="/shopicon/imagesix.png" alt="imgsix" />
                <div className="w-full h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[180px] h-[38px] font-semibold text-[25px] text-[#242424]">Free Shipping</p>
                    <p className="w-[163px] h-[30px] font-medium text-[20px] text-[#898989]">Order over 150 $</p>
                </div>
            </div>
            <div className="h-[70px] gap-[10px] flex flex-row items-center">
                <img className="w-[60px] h-[60px]" src="/shopicon/imageseven.png" alt="imgseven" />
                <div className="h-[70px] flex flex-col gap-[2px]">
                    <p className="w-[187px] h-[38px] font-semibold text-[25px] text-[#242424]">24 / 7 Support</p>
                    <p className="w-[189px] h-[30px] font-medium text-[20px] text-[#898989]">Dedicated support</p>
                </div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default ShopSection;
