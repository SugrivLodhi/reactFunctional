import React, { createContext } from "react";

const UserContext=React.createContext('Sugriv')

const UserProvider=UserContext.Provider

const UserConsumer=UserProvider.Consumer

export {UserProvider,UserConsumer}
