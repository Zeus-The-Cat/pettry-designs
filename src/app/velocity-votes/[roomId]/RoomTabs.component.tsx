import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { ChatPanel } from './ChatPanel.component'
import { TicketPanel } from './TicketsPanel.component'

export const RoomTabs = () => {
    return (
        <div className="h-screen w-full">
            <TabGroup>
                <TabList className="flex gap-4 w-full">
                    {['Tickets', 'Chat'].map((name) => (
                        <Tab
                            key={name}
                            className="bg-white/40 grow rounded-full py-1 px-3 text-sm/6 font-semibold text-accent/90 focus:outline-none data-[selected]:bg-secondary/60 data-[hover]:bg-secondary/30 data-[selected]:data-[hover]:bg-secondary/60 data-[focus]:outline-1 data-[focus]:outline-white"
                        >
                            {name}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels className="mt-3">
                    <TabPanel className="rounded-xl bg-white/60 p-3">
                        <TicketPanel />
                    </TabPanel>
                    <TabPanel className="rounded-xl bg-white/60 p-3">
                        <ChatPanel />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}