import React from "react";

const wrapText = (text: string, maxLength: number) => {
  const words = text.split(" ");
  const lines = words.reduce((l, word) => {
    if (l.length === 0) {
      return [word];
    }
    if (l[l.length - 1].length + word.length + 1 > maxLength) {
      l.push(word);
    } else {
      l[l.length - 1] += ` ${word}`;
    }
    return l;
  }, []);
  return lines;
};

// Returns an SVG for rendering a dynamic social preview for docs pages
const SocialPreview: React.FC<{ title: string }> = ({ title }) => (
  <svg
    width="600"
    height="300"
    viewBox="0 0 600 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="600" height="300" fill="#FBFBFF" />
    <rect width="600" height="8" fill="url(#paint0_linear_141_110)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40.6866 52.5371C40.2289 52.8952 40 53.3965 40 54.041C40 54.6784 40.2289 55.1761 40.6866 55.5342C41.1444 55.8923 41.6832 56.0713 42.3031 56.0713C42.9159 56.0713 43.4493 55.8905 43.9034 55.5288C44.3576 55.1672 44.5846 54.6712 44.5846 54.041C44.5846 53.3965 44.3576 52.8952 43.9034 52.5371C43.4493 52.179 42.9159 52 42.3031 52C41.6832 52 41.1444 52.179 40.6866 52.5371ZM44.3359 57.0166H40.2487V67.7051H44.3359V57.0166ZM45.2601 67.7051V56.834H48.8607L49.0446 58.0264C49.4843 57.5179 50.0141 57.1455 50.634 56.9092C51.2179 56.6872 51.8018 56.5762 52.3857 56.5762H52.4938C52.9768 56.5833 53.4219 56.6388 53.8292 56.7427C54.2365 56.8465 54.624 57.022 54.9916 57.269C55.3592 57.5161 55.6728 57.8312 55.9323 58.2144C56.1918 58.5975 56.3973 59.0827 56.5486 59.6699C56.7 60.2572 56.7757 60.9268 56.7757 61.6787V67.7051H52.6993V61.7002C52.6993 61.0771 52.5515 60.6206 52.256 60.3306C51.9604 60.0405 51.5964 59.8955 51.1639 59.8955C50.6376 59.8955 50.1925 60.0763 49.8285 60.438C49.4645 60.7996 49.2824 61.3171 49.2824 61.9902V67.7051H45.2601ZM57.5485 56.834V67.7051H61.5708V61.9902C61.5708 61.3171 61.7529 60.7996 62.1169 60.438C62.4809 60.0763 62.926 59.8955 63.4523 59.8955C63.8848 59.8955 64.2488 60.0405 64.5444 60.3306C64.8399 60.6206 64.9877 61.0771 64.9877 61.7002V67.7051H69.0641V61.6787C69.0641 60.9268 68.9884 60.2572 68.837 59.6699C68.6857 59.0827 68.4802 58.5975 68.2207 58.2144C67.9612 57.8312 67.6476 57.5161 67.28 57.269C66.9124 57.022 66.5249 56.8465 66.1176 56.7427C65.7103 56.6388 65.2652 56.5833 64.7822 56.5762H64.6741C64.0902 56.5762 63.5063 56.6872 62.9224 56.9092C62.3025 57.1455 61.7727 57.5179 61.333 58.0264L61.1491 56.834H57.5485ZM69.785 62.0712C69.785 60.9611 70.0571 59.98 70.6013 59.1278C71.1456 58.2756 71.8772 57.6257 72.7963 57.1781C73.7154 56.7305 74.7408 56.5067 75.8726 56.5067C76.6367 56.5067 77.39 56.6428 78.1325 56.9149L79.022 55.7951C79.1417 55.6429 79.2381 55.5184 79.3111 55.4217L81.1951 55.8803L82.2521 57.5165L80.8357 59.1815C81.5349 59.955 81.8845 60.8609 81.8845 61.8993V62.1141C81.8701 62.8016 81.6899 63.4641 81.3439 64.1014C80.9979 64.7388 80.5113 65.2795 79.8841 65.7235C80.3527 65.9885 80.7438 66.2857 81.0573 66.6151C81.3709 66.9445 81.5926 67.2686 81.7223 67.5873C81.8521 67.906 81.9368 68.1691 81.9764 68.3768C82.0161 68.5845 82.0359 68.7922 82.0359 68.9999C82.0359 69.6802 81.9206 70.2961 81.6899 70.8475C81.4592 71.399 81.1474 71.8573 80.7546 72.2225C80.3617 72.5878 79.8968 72.8939 79.3597 73.141C78.8227 73.3881 78.2622 73.5653 77.6783 73.6727C77.0944 73.7801 76.4781 73.8339 75.8293 73.8339C73.8758 73.8339 72.3801 73.3576 71.342 72.4051C70.4049 71.5458 69.9363 70.3964 69.9363 68.9569C69.9363 68.8065 69.94 68.6525 69.9472 68.495H73.7749V68.5702C73.7749 68.9226 73.8184 69.2226 73.9054 69.4701L73.9263 69.5262C74.0272 69.8127 74.1804 70.0275 74.3858 70.1708C74.5913 70.314 74.8093 70.4143 75.04 70.4715C75.2707 70.5288 75.5338 70.5575 75.8293 70.5575C76.3988 70.5575 76.8782 70.4232 77.2674 70.1547C77.6567 69.8861 77.8513 69.5012 77.8513 68.9999C77.8513 68.563 77.6945 68.2121 77.381 67.9471C77.0795 67.6924 76.603 67.5601 75.9516 67.5503L75.8726 67.5497C74.0272 67.5497 72.5513 67.0555 71.4447 66.0673C70.3382 65.079 69.785 63.7469 69.785 62.0712ZM74.3534 63.5962C73.9533 63.2059 73.7533 62.6921 73.7533 62.0547C73.7533 61.3529 73.9515 60.8032 74.348 60.4058C74.7444 60.0083 75.2526 59.8096 75.8726 59.8096C76.4637 59.8096 76.9557 60.028 77.3485 60.4648C77.7414 60.9017 77.9378 61.4316 77.9378 62.0547C77.9378 62.7422 77.7396 63.2686 77.3431 63.6338C76.9467 63.999 76.4565 64.1816 75.8726 64.1816C75.2599 64.1816 74.7535 63.9865 74.3534 63.5962ZM82.4756 62.291C82.4756 61.5247 82.5927 60.8211 82.827 60.1802C83.0613 59.5392 83.3749 59.0003 83.7677 58.5635C84.1606 58.1266 84.6183 57.756 85.141 57.4517C85.6636 57.1473 86.2132 56.9253 86.7899 56.7856C87.3666 56.646 87.9577 56.5762 88.5632 56.5762C89.5364 56.5762 90.4212 56.7319 91.2178 57.0435C92.0143 57.355 92.6757 57.8044 93.2019 58.3916C93.7281 58.9788 94.0922 59.695 94.294 60.54C94.3792 60.8981 94.4227 61.2739 94.4245 61.6675L94.4238 61.7861C94.4238 62.2946 94.3625 62.8389 94.2399 63.4189H86.5953C86.7323 63.863 87.0458 64.2049 87.536 64.4448C88.0262 64.6847 88.5272 64.8047 89.039 64.8047C90.1203 64.8047 91.0574 64.5111 91.8503 63.9238L93.8399 66.1475C93.1983 66.7419 92.4468 67.1912 91.5854 67.4956C90.724 67.8 89.8139 67.9521 88.8552 67.9521C87.9685 67.9521 87.1485 67.8411 86.3953 67.6191C85.642 67.3971 84.9698 67.0623 84.3787 66.6147C83.7876 66.1672 83.3226 65.5745 82.9838 64.8369C82.645 64.0993 82.4756 63.2507 82.4756 62.291ZM90.5852 60.8193H86.6169C86.6674 60.4827 86.835 60.1999 87.1197 59.9707C87.4044 59.7415 87.7342 59.6019 88.1091 59.5518C88.2821 59.5303 88.4515 59.5195 88.6173 59.5195C88.8191 59.5195 89.0174 59.5339 89.212 59.5625C89.5796 59.6198 89.895 59.7612 90.1581 59.9868C90.4212 60.2124 90.5636 60.4899 90.5852 60.8193ZM94.4418 66.5664L95.7718 63.6123C96.2836 63.9417 96.8062 64.2013 97.3396 64.3911C97.8731 64.5809 98.2893 64.6955 98.5885 64.7349C98.8877 64.7743 99.2391 64.8047 99.6427 64.8262C100.385 64.8262 100.756 64.6507 100.756 64.2998C100.756 63.9632 100.371 63.7627 99.5995 63.6982C99.1454 63.6839 98.7074 63.6374 98.2857 63.5586C97.864 63.4798 97.4441 63.3509 97.026 63.1719C96.608 62.9928 96.2457 62.7726 95.9394 62.5112C95.633 62.2498 95.3843 61.915 95.1933 61.5068C95.0023 61.0986 94.9067 60.6403 94.9067 60.1318C94.9067 59.5016 95.0473 58.9502 95.3284 58.4775C95.6096 58.0049 95.9916 57.6343 96.4746 57.3657C96.9576 57.0972 97.491 56.8984 98.0749 56.7695C98.6588 56.6406 99.2859 56.5762 99.9563 56.5762C100.829 56.5762 101.658 56.6943 102.443 56.9307C103.229 57.167 103.892 57.4893 104.433 57.8975L102.703 60.3145C102.425 60.1392 102.035 59.9893 101.533 59.8648L101.438 59.8418C100.919 59.7129 100.447 59.6484 100.021 59.6484H99.9563C99.3075 59.6484 98.9832 59.8275 98.9832 60.1855C98.9832 60.3145 99.0462 60.4326 99.1724 60.54C99.2901 60.6403 99.4817 60.6969 99.747 60.7098L99.8049 60.7119C100.31 60.7262 100.778 60.7656 101.211 60.8301C101.643 60.8945 102.088 61.0091 102.546 61.1738C103.004 61.3385 103.395 61.5498 103.719 61.8076C104.044 62.0654 104.308 62.4074 104.514 62.8335C104.719 63.2596 104.822 63.7484 104.822 64.2998C104.822 64.8226 104.73 65.2935 104.546 65.7124C104.363 66.1313 104.112 66.4805 103.795 66.7598C103.478 67.0391 103.099 67.2736 102.66 67.4634C102.22 67.6532 101.757 67.7892 101.27 67.8716C100.783 67.9539 100.27 67.9951 99.7293 67.9951C98.7561 67.9951 97.783 67.868 96.8098 67.6138C95.8366 67.3595 95.0473 67.0104 94.4418 66.5664ZM105.014 56.8984V60.0029H106.766V63.752C106.758 64.3392 106.82 64.8656 106.949 65.3311C107.093 65.8467 107.288 66.2674 107.533 66.5933C107.778 66.9191 108.077 67.1877 108.431 67.3989C108.784 67.6102 109.155 67.7588 109.544 67.8447C109.934 67.9307 110.355 67.9736 110.809 67.9736C112.049 67.9736 113.098 67.7301 113.956 67.2432L113.069 64.2461C112.68 64.4967 112.284 64.6221 111.88 64.6221C111.174 64.6221 110.809 64.2712 110.788 63.5693V60.0029H113.275V56.8984H110.809V53.7617L106.766 54.2021V56.8984H105.014Z"
      fill="#070707"
    />
    {wrapText(title, 24).map((line, i) => (
      <text
        key={`text-${i}`}
        x="37"
        y={124 + i * 42 * 1.3}
        width="530"
        fontSize="42"
        fill="#070707"
        fontFamily="'Real Text Pro', 'Real Text', Helvetica, Roboto, Arial, sans-serif"
        fontWeight="bold"
      >
        {line}
      </text>
    ))}
    <defs>
      <linearGradient
        id="paint0_linear_141_110"
        x1="-4.47035e-06"
        y1="4.00001"
        x2="600"
        y2="3.99968"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B565F3" />
        <stop offset="1" stopColor="#4646F5" />
      </linearGradient>
    </defs>
  </svg>
);

export default SocialPreview;