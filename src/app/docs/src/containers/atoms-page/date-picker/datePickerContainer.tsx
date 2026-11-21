'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Breadcrumb, 
  Tabs, 
  DatePicker, 
  DatePickerRange, 
  Button, 
  Badge, 
  Typography, 
  DateRange 
} from '@core-circle/ui';
import { 
  Calendar as CalendarIcon, 
  Palette, 
  Layers, 
  Play, 
  CodeIcon, 
  Info, 
  Clock, 
  PaperAirplane, 
  Shield, 
  Sparkles, 
  CheckIcon, 
  CreditCard 
} from '@core-circle/icons';
import ComponentPreview from '../../../components/component-preview';
import DocSection from '../../../components/doc-section';
import { atomsPageStyles as s } from '../atoms.styles';
import { 
  DATE_PICKER_PROPS_DATA 
} from '../../../constants/atoms-page/date-picker/datePickerConstants';
import { DatePickerPlayground } from '../../../components/playground/date-picker/datePickerPlayground';
import PropsTable from '../../../components/props-table';
import CodeSnippet from '../../../components/code-snippet';
import { DatePickerContainerProps } from '../../../interface/containers/atoms/date-picker.types';

export default function DatePickerContainer({
  headerContent,
  breadcrumbItems
}: DatePickerContainerProps) {
  // Sample state for themes
  const [flightRange, setFlightRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
  });

  const [clinicDate, setClinicDate] = useState<Date | undefined>(new Date());
  const [clinicTime, setClinicTime] = useState('10:30');

  const [fiscalRange, setFiscalRange] = useState<DateRange>({
    from: new Date(2026, 0, 1),
    to: new Date(2026, 2, 31)
  });

  const [eventDate, setEventDate] = useState<Date | undefined>(
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
  );

  const [sprintRange, setSprintRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
  });

  const tabItems = [
    {
      id: 'theming',
      label: 'Theming',
      icon: <Palette size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          {/* 1. Global Airline Flight & Hotel Booking Range Theme */}
          <DocSection
            id="theming-flight-booking"
            title="1. Global Flight & Travel Booking Interval Theme"
            description="Dual-date range picker with quick vacation presets and luggage check flags."
          >
            <ComponentPreview
              title="Round-Trip Flight Interval Selector"
              code={`<div className="w-full max-w-lg p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div>
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Flight Route</span>
      <h4 className="text-base font-extrabold text-slate-900">SFO ➔ LHR (Non-Stop)</h4>
    </div>
    <Badge variant="primary" shape="pill" size="sm">Economy Flex</Badge>
  </div>
  <DatePicker
    mode="range"
    variant="floating"
    label="Departure & Return Dates"
    rangeValue={flightRange}
    onRangeChange={setFlightRange}
    showPresets
  />
  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
    <span className="text-xs text-slate-500">14-Day Trip (Includes 2 Checked Bags)</span>
    <Button variant="primary" size="sm">Search Flights</Button>
  </div>
</div>`}
            >
              <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Flight Route</span>
                    <h4 className="text-base font-extrabold text-slate-900">SFO ➔ LHR (Non-Stop)</h4>
                  </div>
                  <Badge variant="primary" shape="pill" size="sm">Economy Flex</Badge>
                </div>
                <DatePicker
                  mode="range"
                  variant="floating"
                  label="Departure & Return Dates"
                  rangeValue={flightRange}
                  onRangeChange={setFlightRange}
                  showPresets
                />
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500">10-Day Trip (Includes 2 Checked Bags)</span>
                  <Button variant="primary" size="sm">Search Flights</Button>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 2. Medical Appointment Scheduler Theme */}
          <DocSection
            id="theming-medical-appointment"
            title="2. Clinical Appointment & Consultation Theme"
            description="Single date selection combined with integrated time selector for doctor consultations."
          >
            <ComponentPreview
              title="Telehealth Specialist Scheduler"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-2xl flex items-center justify-center">
      <Shield size={20} />
    </div>
    <div>
      <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins, MD</h4>
      <p className="text-xs text-slate-500">Cardiology Video Consultation (30 min)</p>
    </div>
  </div>
  <DatePicker
    variant="outline"
    label="Select Date & Time"
    value={clinicDate}
    onChange={setClinicDate}
    showTime
    timeValue="${clinicTime}"
    onTimeChange={setClinicTime}
    minDate={new Date()}
  />
  <Button variant="primary" size="md" fullWidth>
    Confirm Appointment
  </Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-2xl flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. Sarah Jenkins, MD</h4>
                    <p className="text-xs text-slate-500">Cardiology Video Consultation (30 min)</p>
                  </div>
                </div>
                <DatePicker
                  variant="outline"
                  label="Select Date & Time"
                  value={clinicDate}
                  onChange={setClinicDate}
                  showTime
                  timeValue={clinicTime}
                  onTimeChange={setClinicTime}
                  minDate={new Date()}
                />
                <Button variant="primary" size="md" fullWidth>
                  Confirm Appointment
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 3. Financial Fiscal Quarter & Tax Report Period Theme */}
          <DocSection
            id="theming-fiscal-quarter"
            title="3. Financial Fiscal Quarter & Tax Period Theme"
            description="Pre-configured reporting period filters for accounting dashboards."
          >
            <ComponentPreview
              title="Audit & Tax Reporting Interval"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <span className="font-bold text-slate-900 text-sm">Fiscal Period (FY2026)</span>
    <Badge variant="success" shape="pill" size="sm">Q1 Audited</Badge>
  </div>
  <DatePicker
    mode="range"
    variant="material"
    label="Reporting Window"
    rangeValue={fiscalRange}
    onRangeChange={setFiscalRange}
    showPresets
  />
  <div className="flex justify-between items-center text-xs text-slate-500">
    <span>Format: GAAP Compliant</span>
    <Button variant="outline" size="sm">Download CSV</Button>
  </div>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-900 text-sm">Fiscal Period (FY2026)</span>
                  <Badge variant="success" shape="pill" size="sm">Q1 Audited</Badge>
                </div>
                <DatePicker
                  mode="range"
                  variant="material"
                  label="Reporting Window"
                  rangeValue={fiscalRange}
                  onRangeChange={setFiscalRange}
                  showPresets
                />
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Format: GAAP Compliant</span>
                  <Button variant="outline" size="sm">Download CSV</Button>
                </div>
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 4. Glassmorphic VIP Concert Ticket & Event Theme */}
          <DocSection
            id="theming-concert-event"
            title="4. Glassmorphic Concert Ticket & Event Booking Theme"
            description="Translucent event scheduler with VIP countdown banner on radiant backdrop."
          >
            <ComponentPreview
              title="VIP World Tour Date Selection"
              code={`<DatePicker
  variant="glassmorphic"
  label="Select Show Performance Date"
  value={eventDate}
  onChange={setEventDate}
  minDate={new Date()}
/>`}
            >
              <div className="w-full p-8 bg-gradient-to-r from-purple-100/70 via-indigo-100/50 to-blue-100/70 rounded-3xl flex justify-center">
                <DatePicker
                  variant="glassmorphic"
                  label="Select Show Performance Date"
                  value={eventDate}
                  onChange={setEventDate}
                  minDate={new Date()}
                />
              </div>
            </ComponentPreview>
          </DocSection>

          {/* 5. Agile Sprint Milestone & Release Timeline Theme */}
          <DocSection
            id="theming-agile-sprint"
            title="5. Agile Sprint Timeline & Milestone Theme"
            description="Sprint planning date range with 14-day duration pill and deployment triggers."
          >
            <ComponentPreview
              title="Sprint 42 Milestone Window"
              code={`<div className="w-full max-w-md p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Sparkles size={16} className="text-core-circle-primary" />
      <span className="font-bold text-slate-900 text-sm">Sprint 42 (Core Release)</span>
    </div>
    <Badge variant="primary" shape="pill" size="sm">2 Weeks</Badge>
  </div>
  <DatePicker
    mode="range"
    variant="pill"
    rangeValue={sprintRange}
    onRangeChange={setSprintRange}
  />
  <Button variant="outline" size="sm" fullWidth>
    Sync with Jira & GitHub Milestones
  </Button>
</div>`}
            >
              <div className="w-full max-w-md mx-auto p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-core-circle-primary" />
                    <span className="font-bold text-slate-900 text-sm">Sprint 42 (Core Release)</span>
                  </div>
                  <Badge variant="primary" shape="pill" size="sm">2 Weeks</Badge>
                </div>
                <DatePicker
                  mode="range"
                  variant="pill"
                  rangeValue={sprintRange}
                  onRangeChange={setSprintRange}
                />
                <Button variant="outline" size="sm" fullWidth>
                  Sync with Jira & GitHub Milestones
                </Button>
              </div>
            </ComponentPreview>
          </DocSection>
        </div>
      )
    },
    {
      id: 'variants',
      label: 'Variants',
      icon: <Layers size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="datepicker-variants-styles" title="1. Trigger & Popover Styles (10 Variants)" description="Outline, filled, floating, glassmorphic, pill, material, gradient, compact, and ghost styles.">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              <DatePicker variant="outline" label="Outline" defaultValue={new Date()} />
              <DatePicker variant="filled" label="Filled" defaultValue={new Date()} />
              <DatePicker variant="floating" label="Floating" defaultValue={new Date()} />
              <DatePicker variant="glassmorphic" label="Glassmorphic" defaultValue={new Date()} />
              <DatePicker variant="pill" label="Pill Capsule" defaultValue={new Date()} />
              <DatePicker variant="material" label="Material" defaultValue={new Date()} />
              <DatePicker variant="gradient" label="Gradient Glow" defaultValue={new Date()} />
              <DatePicker variant="compact" label="Compact" defaultValue={new Date()} />
              <DatePicker variant="ghost" label="Ghost Minimal" defaultValue={new Date()} />
            </div>
          </DocSection>

          <DocSection id="datepicker-variants-modes" title="2. Date Selection Modes" description="Single date, date range intervals, and always-open inline calendar widgets.">
            <div className="flex flex-wrap gap-8 items-start w-full">
              <DatePicker 
                mode="single" 
                label="Single Date Picker" 
                defaultValue={new Date()} 
              />
              <DatePicker 
                mode="range" 
                label="Date Range Picker" 
                defaultRangeValue={{ from: new Date(), to: new Date(Date.now() + 86400000 * 7) }} 
              />
              <DatePicker 
                mode="inline" 
                variant="calendar-card" 
                label="Embedded Inline Calendar" 
                defaultValue={new Date()} 
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'playground',
      label: 'Playground',
      icon: <Play size={16} />,
      content: (
        <DocSection
          id="datepicker-playground-section"
          title="Interactive Playground"
          description="Experiment with 10 visual variants, single/range/inline modes, presets, and time pickers."
        >
          <DatePickerPlayground />
        </DocSection>
      )
    },
    {
      id: 'mock-code',
      label: 'Mock Code',
      icon: <CodeIcon size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection
            id="datepicker-mock"
            title="Dynamic Reservation & Booking Integration"
            description="Persist chosen appointment or vacation dates with remote API mutations."
          >
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Sample Backend Booking API Payload"
                code={JSON.stringify({
                  booking_id: "bk_9824",
                  customer_id: "cust_314",
                  reservation_dates: {
                    check_in: "2026-09-12",
                    check_out: "2026-09-19"
                  },
                  appointment_time: "14:30",
                  status: "confirmed"
                }, null, 2)}
              />

              <CodeSnippet
                label="Dynamic Consumer Component"
                code={`import React, { useState } from 'react';
import { DatePicker, Button, DateRange } from '@core-circle/ui';

export const FlightBookingScheduler = () => {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 86400000)
  });

  const handleBook = async () => {
    await fetch('/api/v1/flights/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        departure: range.from?.toISOString(),
        return: range.to?.toISOString()
      })
    });
  };

  return (
    <div className="space-y-4">
      <DatePicker
        mode="range"
        variant="floating"
        label="Trip Duration"
        rangeValue={range}
        onRangeChange={setRange}
        showPresets
      />
      <Button variant="primary" onClick={handleBook}>
        Confirm Reservation
      </Button>
    </div>
  );
};`}
              />
            </div>
          </DocSection>
        </div>
      )
    },
    {
      id: 'overview',
      label: 'Overview',
      icon: <Info size={16} />,
      content: (
        <div className="flex flex-col gap-12 max-w-5xl">
          <DocSection id="datepicker-usage" title="Introduction" description="The DatePicker atom enables fast, accessible date and range selections with built-in navigation, presets, and time pickers.">
            <div className="flex flex-col gap-8 mt-6">
              <CodeSnippet
                label="Quick Usage"
                code={`import { DatePicker } from '@core-circle/ui';

const [date, setDate] = useState(new Date());

<DatePicker
  label="Schedule Date"
  value={date}
  onChange={setDate}
  showPresets
/>`}
              />
              <div className="flex flex-col gap-4">
                <Typography variant="h4" className="text-xs font-bold uppercase tracking-wider text-core-circle-text-muted">Component Props</Typography>
                <PropsTable data={DATE_PICKER_PROPS_DATA} />
              </div>
            </div>
          </DocSection>
        </div>
      )
    }
  ];

  return (
    <div className={s.container}>
      <header className={s.header}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} renderLink={(props) => <Link {...props} />} className="mb-4" />
        )}
        <Typography variant="h1" className={s.title}>{headerContent.title}</Typography>
        <Typography variant="p" className={s.description}>{headerContent.description}</Typography>
      </header>

      <div className="mt-8">
        <Tabs items={tabItems} variant="underline" size="lg" className="w-full" />
      </div>
    </div>
  );
}
