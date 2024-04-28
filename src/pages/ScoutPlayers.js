import {
    Button,
    TextField,
    InputAdornment,
    Icon,
    IconButton,
} from "@mui/material";
import Box from "../components/box";
import Table from "../components/table";
import Upperinfo from "../components/upperinfo";
import ColumnNames from "../components/column-names";
import DropdownMenu from "../components/dropdown-menu";
import Head from "../components/head";
import TopNavigation from "../components/top-navigation";
import { Changebox } from "../components/Changebox";
import { Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const ScoutPlayers = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full relative bg-black h-[1025px] overflow-hidden text-left text-[16px] text-grey-colors-dark-mode-100 font-headings-h2">
            <TopNavigation
                group16="/group-16@2x.png"
                topNavigationMargin="0"
                topNavigationPosition="absolute"
                topNavigationTop="0px"
                topNavigationLeft="0px"
            />
            <div className="absolute top-[calc(50%_-_596.5px)] left-[calc(50%_+_261px)] rounded-[50%] bg-blueviolet-100 [filter:blur(376px)] [backdrop-filter:blur(48px)] w-[449px] h-[528px] opacity-[0.2]" />
            <div className="absolute top-[calc(50%_-_232.5px)] left-[calc(50%_-_734px)] rounded-[50%] bg-blueviolet-200 [filter:blur(376px)] [backdrop-filter:blur(48px)] w-[489px] h-[528px] opacity-[0.2]" />
            <div className="absolute top-[92px] left-[250px] flex flex-row items-center justify-start gap-[12px]">
                <img
                    className="w-[11.3px] relative h-[9.6px] object-contain"
                    alt=""
                    src="/group-1287@2x.png"
                />
                <h2 className="m-0 relative text-inherit leading-[24px] font-inherit">
                    <span>{`Game Guide / Valorant / `}</span>
                    <span className="font-semibold text-gray-100">Scout Players</span>
                </h2>
            </div>
            <Box />
            <Upperinfo />
            <h4 className="m-0 absolute top-[200px] left-[272px] text-sm leading-[20px] font-normal font-inherit">
                View map win rates and play rates for any rank or game mode.
            </h4>
            <Outlet />

            <div className="absolute top-[160px] left-[270px] flex flex-row items-center justify-start gap-[12px] text-xl text-gray-100">
                <img
                    className="w-7 relative h-7 object-cover"
                    alt=""
                    src="/group-47450@2x.png"
                />
                <h1 className="m-0 flex-1 relative text-inherit leading-[28px] font-semibold font-inherit">
                    Scout Players
                </h1>
            </div>
            <TextField
                className="[border:none] bg-[transparent] absolute top-[312px] left-[1065px] font-headings-h2 text-sm text-gray-200"
                color="primary"
                label="Search Agents"
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "40px" }, width: "173px" }}
            />
            <Head />

        </div>
    );
};

export default ScoutPlayers;
