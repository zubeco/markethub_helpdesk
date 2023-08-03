import { Select, Stack } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import AuthContext from "../../../context/userSummary";

export default function LangOption({ color, weight }) {
  const { language, handleSetLanguage } = useContext(AuthContext);

  return (
    <div>
      <Stack ml="10px">
        <Select
          height="25px"
          size="xs"
          bg="white"
          border="none"
          outline="none"
          color={color}
          fontWeight={weight}
          value={language}
          onChange={(e) => handleSetLanguage(e.target.value)}
        >
          <option value="French">French-DRC</option>
          <option value="English">English</option>
        </Select>
      </Stack>
    </div>
  );
}
