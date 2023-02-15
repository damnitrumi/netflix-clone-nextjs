import Link from "next/link";
import * as Styled from "./styles";
import { Search, Pencil } from "@styled-icons/bootstrap";
import {
  Notifications,
  ArrowDropDown,
  Menu,
} from "@styled-icons/material-outlined";

import { User, HelpCircle } from "@styled-icons/boxicons-regular";
import { Profile } from "@styled-icons/icomoon";
import { useState, useRef, useEffect } from "react";
import { HomeHeaderResponsive } from "../HomeHeaderResponsive";
import { signOut } from "next-auth/react";

export type HomeInputProps = {
  focused: boolean;
};

export type HomeHeaderProps = {
  navBg: boolean;
  menuVisible: boolean;
};

export const HomeHeader = () => {
  const inputSearch = useRef();
  const [search, setSearch] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleBtnSearchClick = () => {
    const input = inputSearch.current as HTMLElement;
    input.focus();
    setSearch(true);
  };

  const changeBgNavOnScroll = () => {
    const scrollWindow = window.scrollY;
    if (scrollWindow >= 1 && navBg == false) {
      setNavBg(true);
    } else if (scrollWindow < 1 && navBg == true) {
      setNavBg(false);
    }
  };

  const handleMenuClick = () => {
    setMenuVisible((v) => !v);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBgNavOnScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", changeBgNavOnScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navBg]);

  return (
    <Styled.Wrapper navBg={navBg} menuVisible={menuVisible}>
      <button onClick={handleMenuClick}>
        <Menu size="35px" />
      </button>
      <Link href="/browse" legacyBehavior>
        <a>
          <span>
            <svg viewBox="0 0 111 30" data-uia="netflix-logo" focusable="false">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </svg>
          </span>
        </a>
      </Link>
      <Styled.Navbar>
        <Styled.DropdownLeftContainer>
          <Styled.DropdownLeftHandler>
            <span>Navegar</span>
            <ArrowDropDown size="24px" />
          </Styled.DropdownLeftHandler>
          <Styled.LeftListHeaderResponsive>
            <ArrowDropDown size="35px" className="left-list-arrow" />

            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/">Séries</Link>
            </li>
            <li>
              <Link href="/">Filmes</Link>
            </li>
            <li>
              <Link href="/">Bombando</Link>
            </li>
            <li>
              <Link href="/">Minha lista</Link>
            </li>
            <li>
              <Link href="/">Navegar por idiomas</Link>
            </li>
          </Styled.LeftListHeaderResponsive>
          <Styled.LeftList>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/">Séries</Link>
            </li>
            <li>
              <Link href="/">Filmes</Link>
            </li>
            <li>
              <Link href="/">Bombando</Link>
            </li>
            <li>
              <Link href="/">Minha lista</Link>
            </li>
            <li>
              <Link href="/">Navegar por idiomas</Link>
            </li>
          </Styled.LeftList>
        </Styled.DropdownLeftContainer>
        <Styled.RightList>
          <li className="input-li">
            <Styled.InputContainer focused={search}>
              {!search && (
                <button onClick={handleBtnSearchClick}>
                  <Search size="24px" />
                </button>
              )}
              {search && (
                <div>
                  <Search size="24px" />
                </div>
              )}
              <Styled.SearchInput
                type="search"
                placeholder="Títulos, gente e gêneros"
                ref={inputSearch}
                onBlur={() => setSearch(false)}
                focused={search}
              />
            </Styled.InputContainer>
          </li>
          <li className="remove-responsive">
            <Link href="/Kids">Infantil</Link>
          </li>
          <li className="notifications">
            <Notifications size="24px" />
          </li>
          <li className="profile">
            <button>
              <Styled.ImgContainer>
                <img
                  src="assets/images/netflix-user-icon.jpg"
                  alt="Sunder Muthukumaran on Unsplash.com"
                />
              </Styled.ImgContainer>
              <ArrowDropDown />
            </button>
            <Styled.DropdownRightMenu>
              <ArrowDropDown size="35px" className="right-list-arrow" />

              <li>
                <Link href="/" legacyBehavior>
                  <a>
                    <Pencil size="20px" /> Gerenciar perfis
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a>
                    <Profile size="20px" />
                    Transferir perfil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a>
                    <User size="20px" />
                    Conta
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" legacyBehavior>
                  <a>
                    <HelpCircle size="20px" />
                    Central de Ajuda
                  </a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000/login" })
                  }
                >
                  Sair da Netflix
                </button>
              </li>
            </Styled.DropdownRightMenu>
          </li>
        </Styled.RightList>
      </Styled.Navbar>
      <HomeHeaderResponsive visible={menuVisible} />
      {menuVisible && <Styled.bg />}
    </Styled.Wrapper>
  );
};
