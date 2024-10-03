import { Box, Typography } from "@mui/material";
import React from "react";

const OurConditions = () => {
  return (
    <Box
      sx={{
        p: 5,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Terms and Conditions
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Acceptance of Terms:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          Before using the service, it's important to agree to these Terms and
          Conditions. If you don't agree, please refrain from using the service.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Refund Policy:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          If you've accepted the Terms and Conditions or used the service as a
          member under any plan, you might not be eligible for a full refund.
          Refunds are subject to the Refund Policy outlined below.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Plan Membership:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          During the membership period, members get support for unlimited
          incidents. The company can restrict each contact to one issue. They
          have the right to limit or terminate support for members who misuse
          the service. The terms, conditions, pricing, and support features can
          change without notice.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Incident Definition:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          An "incident" means a single problem or query a member asks support to
          address. It can also involve product usage questions or specific
          bookkeeping inquiries.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Support Availability:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          Support representatives will be available within specified response
          times during working hours. However, response times might vary due to
          various factors.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Product Upgrades:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          Plan members might be informed about software upgrades. They can't
          receive upgrades released after their plan expiration.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Data Recovery and Password Removal:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          Data recovery and password removal services are available. If a
          technical support representative can't fix a data file, recovery
          services can be attempted. There's a fee for express data recovery.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Payment and Renewal:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          Annual subscriptions commit members to a 12-month term. Cancelling
          within the first 3 days can result in a refund, but after that, a
          termination fee applies. Plans automatically renew, and payment
          information must be accurate. Non-payment can lead to account denial.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Limitation of Liability:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          The maximum liability for any claim under the plan is a refund of the
          plan fee paid for the relevant period. The company is not liable for
          indirect, special, or consequential damages.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Governing Law:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          These terms are governed by the laws of the state where the company
          operates. Any legal actions will be taken in local courts.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Privacy:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          User information is subject to the company's privacy policies. Users
          consent to the use of their information as outlined in the privacy
          statement.
        </Typography>
        <Typography variant="h6" gutterBottom>
          CIBIL Score Check:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          Users allow the company and its financial partners to check their
          credit score for loan eligibility.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Refund Policy:
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            pl: 1,
          }}
        >
          A member can cancel within the first 3 days for a refund, subject to
          certain conditions. If services have been used, fees might be deducted
          from the refund. Version upgrade costs may also be deducted if
          received within 3 days of cancellation request.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurConditions;
